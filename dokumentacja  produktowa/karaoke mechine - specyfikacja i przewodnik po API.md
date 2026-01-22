📖 Specyfikacja i Przewodnik po API - Karaoke Machine

Niniejszy dokument opisuje strukturę endpointów, wymagane nagłówki oraz modele danych wykorzystywane w komunikacji między frontendem (React/Vue) a backendem (Spring Boot).



1\. Informacje ogólne

Base URL: http://localhost:8080



Format danych: application/json



Autoryzacja: Nagłówek Authorization: Bearer <JWT\_TOKEN>



CORS: Backend akceptuje żądania z localhost:5173 oraz localhost:5175.



2\. Specyfikacja Endpointów

🔐 Autoryzacja i Użytkownik

Metoda	Endpoint	Opis	Wymaga Tokena

POST	/api/auth/register	Rejestracja nowego konta	Nie

POST	/api/auth/login	Logowanie - zwraca token JWT	Nie

GET	/api/users/me	Pobranie profilu zalogowanego usera	Tak



Eksportuj do Arkuszy



🎵 Piosenki i Integracja YouTube

Metoda	Endpoint	Opis	Wymaga Tokena

GET	/api/songs/search-online	Wyszukiwanie piosenek w YouTube API	Tak

POST	/api/songs/like	Zapis piosenki z YouTube do bazy i polubienie	Tak

GET	/api/songs/my-liked-songs	Lista wszystkich polubionych piosenek	Tak



Eksportuj do Arkuszy



3\. Przewodnik po integracji (How-to)

Krok 1: Uzyskanie dostępu

Aby korzystać z większości funkcji, musisz wysłać zapytanie POST /api/auth/login. W odpowiedzi otrzymasz token, który musisz zapisać (np. w localStorage).



Krok 2: Wyszukiwanie i Polubienie

Gdy użytkownik wpisze frazę w wyszukiwarkę, frontend powinien odpytać: GET /api/songs/search-online?query=linkin park



Gdy użytkownik kliknie przycisk "Like" przy wyniku z YouTube, wyślij: POST /api/songs/like Body:



JSON



{

&nbsp; "videoId": "k4V3Mo61fJM",

&nbsp; "title": "Lady Gaga - Bad Romance",

&nbsp; "thumbnailUrl": "https://img.youtube.com/..."

}

Backend sprawdzi, czy piosenka jest w bazie. Jeśli nie – utworzy ją, a następnie doda do Twojej listy ulubionych.



4\. Struktura Modeli Danych (DTO)

Model Song (w bazie danych)

W związku z integracją z YouTube, model piosenki został uelastyczniony:



id: Long (Klucz główny)



title: String (Wymagane)



videoId: String (Unikalny identyfikator YouTube)



thumbnailUrl: String (Link do miniaturki)



artist, genre, lyrics: String (Opcjonalne - mogą być null dla utworów z sieci)



Model UserResponseDTO

Zwracany przez /api/users/me:



JSON



{

&nbsp; "id": 13,

&nbsp; "username": "admin\_test",

&nbsp; "role": "ROLE\_ADMIN",

&nbsp; "likedSongIds": \[7, 15]

}

\*\*



5\. Typowe problemy i kody błędów

401 Unauthorized: Brak tokena lub token wygasł. Zaloguj się ponownie.



403 Forbidden: Próba dostępu do panelu admina bez roli ROLE\_ADMIN lub błąd CORS (sprawdź port frontendu).



500 Internal Server Error: Najczęściej błąd SQL (np. brakująca kolumna thumbnail\_url).

