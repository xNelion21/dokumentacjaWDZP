# Skład zespołu

Realizacja projektu **Karaoke Machine** była wynikiem współpracy zespołu, w którym role zostały podzielone zgodnie z kompetencjami technicznymi oraz zainteresowaniami poszczególnych członków.

## Podział ról i odpowiedzialności

| Imię i Nazwisko / Nick | Rola główna | Kluczowe odpowiedzialności |
| :--- | :--- | :--- |
| **Roksana Żyłka** | Backend Developer / Leader | Koordynacja prac, architektura API, integracja z Aiven, Autoryzacja, Userzy i Admini, Role, dokumentacja ADR. |
| **Mikołaj Wołoszyn** | Frontend Developer | Widoki, tłumaczenia stron, formularze logowania, komunikaty błędów, analiza wymagań. |
| **Marcin Szuszko** | Backend Developer | Implementacja logiki biznesowej w Spring Boot, mapowanie JPA/Hibernate, relacje piosenek i sugestii. |
| **Kamil Ziemiański** | Frontend Developer 2 | Tworzenie komponentów Vue.js, Panel Admina |
| **Kamil Kubrak** | Tester | Testy Automatyczne |

---

## Szczegółowy zakres prac

### Zarządzanie i Dokumentacja
* **Osoba odpowiedzialna:** [Roksana], reszta zespołu
* **Zakres:** Prowadzenie dokumentacji w VitePress, definiowanie procesów biznesowych, zarządzanie repozytorium na GitHub oraz rejestrowanie decyzji architektonicznych (ADR).

### Backend & Infrastruktura (Spring Boot)
* **Osoba odpowiedzialna:** [Roksana/ Marcin]
* **Zakres:** Projektowanie struktury bazy danych PostgreSQL, konfiguracja hostingu na platformie Aiven, implementacja bezpiecznych endpointów REST API oraz integracja z zewnętrznym YouTube Data API.

### Frontend (Vue.js)
* **Osoba odpowiedzialna:** [Mikołaj / Kamil Z]
* **Zakres:** Budowa responsywnego interfejsu użytkownika, zarządzanie stanem aplikacji, implementacja mechanizmu synchronizacji tekstu (Lyrics) z wideo oraz panel administratora do moderacji treści.

---

## Metodyka pracy
Zespół pracował w modelu zwinnym, komunikując się regularnie w celu synchronizacji postępów. Wykorzystanie GitHuba pozwoliło na równoległe prowadzenie prac nad warstwą wizualną i serwerową, a system Pull Requestów zapewnił kontrolę jakości wprowadzanego kodu.