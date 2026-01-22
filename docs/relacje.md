# Model danych i Relacje

Poniższy schemat oraz opis przedstawiają strukturę bazy danych projektu Karaoke Machine. System opiera się na relacyjnym modelu danych, który zapewnia spójność między utworami, ich autorami oraz kategoriami.

## Schemat bazy danych (ERD)

![Schemat relacji bazy danych](/img/relacje.png)

---

## Opis Tabel i Relacji

### 1. Tabela Utworów (`SONGS`)
Jest to centralna encja systemu, przechowująca podstawowe informacje o piosenkach.
* **Klucz Główny (PK):** `id` (bigint)
* **Pola:** * `title` (varchar) – tytuł utworu.
    * `genre` (varchar) – gatunek muzyczny.
    * `lyrics` (longtext) – pełny tekst piosenki.
    * `youtube_url` (varchar) – link do podkładu muzycznego.

### 2. Tabela Linii Tekstu (`LYRIC_LINE`)
Odpowiada za przechowywanie zsynchronizowanego tekstu piosenki.
* **Relacja:** Wiele-do-jednego (Many-to-One) z tabelą `SONGS`. Każda piosenka posiada wiele przypisanych linii tekstu.
* **Klucze:** `id` (PK), `song_id` (FK).
* **Pola:** `text`, `time_stamp_start`, `time_stamp_end`.

### 3. Relacje Wiele-do-Wielu (Many-to-Many)
System wykorzystuje tabele łączące (Join Tables) do obsługi złożonych powiązań:

* **Autorzy (`SONG_AUTHOR`):** Łączy piosenki z ich twórcami.
    * Encja powiązana: `AUTHOR` (pola: `id`, `name`).
    * Tabela łącząca zawiera klucze obce: `song_id` oraz `author_id`.
* **Kategorie (`SONG_CATEGORY`):** Pozwala przypisać utwór do wielu kategorii (np. "Pop", "Lata 90").
    * Encja powiązana: `CATEGORY` (pola: `id`, `name`).
    * Tabela łącząca zawiera klucze obce: `song_id` oraz `category_id`.

### 4. Tabela Użytkowników (`USERS`)
Przechowuje dane niezbędne do autoryzacji i zarządzania uprawnieniami.
* **Klucz Główny (PK):** `id` (bigint).
* **Pola:**
    * `username`, `email`, `password`.
    * `role` (enum) – określa poziom dostępu (np. USER, ADMIN).