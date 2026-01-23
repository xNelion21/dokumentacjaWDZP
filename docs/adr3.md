## ADR 3: Synchronizacja z zewnętrznym API YouTube

**Data:** 2025-12-10
**Status:** Zaakceptowane  

### Kontekst
Po wdrożeniu systemu `LyricLine` i integracji z zewnętrzną bazą (YouTube API), pojawił się problem niespójności danych (np. zmiana tytułu na YT a nasze napisy).

### Decyzja
Zdecydowaliśmy, że nasze API będzie pełnić rolę nadrzędną dla synchronizacji.
* **Proces:** Podczas dodawania piosenki, Spring Boot pobiera metadane z YouTube API, ale napisy (`LyricLine`) są tworzone i przechowywane wyłącznie w naszej bazie PostgreSQL.
* **Klucz:** Pole `youtube_url` służy jako unikalny identyfikator łączący nasze dane z filmem.

### Konsekwencje
* Umożliwia to tworzenie własnych, poprawionych wersji tekstów niezależnie od napisów wbudowanych w YouTube.