# Karta – 1

# Maszyna Karaoke 

Zespół:  
[Roksana Żyłka](mailto:roksana.zylka@studenci.collegiumwitelona.pl)  
[Kamil Kubrak](mailto:kamil.kubrak@studenci.collegiumwitelona.pl)  
[Kamil Ziemiański](mailto:kamil.ziemianski@studenci.collegiumwitelona.pl)  
[Mikołaj Wołoszyn](mailto:mikolaj.woloszyn@studenci.collegiumwitelona.pl)

# Dokumentacja Projektowa - Karaoke Machine 2025

## 1. Opis Projektu
Aplikacja Karaoke Machine to platforma umożliwiająca użytkownikom wyszukiwanie piosenek bezpośrednio z serwisu YouTube, zarządzanie własną listą ulubionych utworów oraz odtwarzanie ich w dedykowanym playerze. System posiada zaawansowany moduł backendowy w Spring Boot zintegrowany z bazą danych MySQL oraz zabezpieczony protokołem JWT.

## 2. Środowisko i Technologie
* **Backend:** Java 17, Spring Boot 3.x
* **Frontend:** React.js / Vite (localhost:5173)
* **Baza danych:** MySQL 8.0
* **Zabezpieczenia:** Spring Security, JWT (JSON Web Token), OAuth2 (Google Login)
* **Integracje:** YouTube Data API v3

## 3. Struktura Bazy Danych (Relacje)
Głównym elementem systemu jest relacja **Many-to-Many** pomiędzy Użytkownikiem a Piosenkami:
* **Użytkownicy (`users`):** Przechowuje dane kont, role (ROLE_USER, ROLE_ADMIN) oraz powiązania z polubionymi piosenkami.
* **Piosenki (`songs`):** Przechowuje metadane piosenek. 
    * *Uwaga:* Pola `artist`, `genre` oraz `lyrics` są opcjonalne (`nullable`), aby umożliwić zapisywanie szybkich wyników z YouTube.
    * *Nowość:* Dodano pole `thumbnail_url` oraz `videoId` dla integracji z playerem.
* **Tabela łącząca (`user_likes_song`):** Łączy `user_id` z `song_id`.

## 4. Dokumentacja API (Endpointy)

### 4.1. Autoryzacja (`/api/auth`)
* `POST /api/auth/register` - Rejestracja nowego użytkownika.
* `POST /api/auth/login` - Logowanie. Zwraca token JWT wymagany do pozostałych żądań.

### 4.2. Zarządzanie użytkownikiem (`/api/users`)
* `GET /api/users/me` - Pobiera profil zalogowanego użytkownika (zwraca dane o rolach i listę polubionych piosenek). **Wymaga nagłówka Bearer Token.**

### 4.3. Piosenki i Integracja YouTube (`/api/songs`)
* `GET /api/songs` - Pobiera listę wszystkich piosenek zapisanych w bazie danych.
* `GET /api/songs/search-online?query={fraza}` - Wyszukuje piosenki bezpośrednio w API YouTube (zwraca videoId, tytuł i miniaturkę).
* `POST /api/songs/like` - Przyjmuje obiekt piosenki z YouTube, zapisuje go w bazie danych (jeśli nie istnieje) i przypisuje do konta zalogowanego użytkownika.
    * **Body:** `{"videoId": "string", "title": "string", "thumbnailUrl": "string"}`
* `GET /api/songs/my-liked-songs` - Dedykowany endpoint zwracający tylko piosenki polubione przez aktualnego użytkownika.

## 5. Konfiguracja Bezpieczeństwa (CORS)
Aplikacja jest skonfigurowana do pracy w środowisku rozproszonym. Backend akceptuje połączenia z następujących źródeł:
* `http://localhost:5173` (Vite)
* `http://localhost:3000` (React default)
* `http://localhost:5175` (Opcjonalne porty dev)

System automatycznie obsługuje żądania typu `OPTIONS` (Preflight) oraz nagłówki `Authorization` i `Content-Type`.

## 6. Kluczowe Funkcjonalności Zrealizowane
1.  **Dynamiczne Wyszukiwanie:** Integracja z YouTube pozwala na dostęp do milionów utworów bez konieczności ręcznego uzupełniania bazy.
2.  **Zabezpieczone Profile:** Każdy użytkownik ma własną, prywatną listę ulubionych utworów.
3.  **Obsługa Ról:** Podział na administratorów (dostęp do zarządzania bazą) i użytkowników (dostęp do wyszukiwania i polubień).
4.  **Globalna Obsługa Błędów:** Implementacja `GlobalExceptionHandler` zapobiega mylnym błędom 401/403 przy wysyłaniu niepoprawnych danych (np. puste Body JSON).

---
*Dokumentacja sporządzona na dzień: 01.01.2026*
