## ADR 2: Zarządzanie tekstem piosenek (Lyric Line)

**Data:** 2025-10-18
**Status:** Zaakceptowane  

### Kontekst
System wymaga precyzyjnej synchronizacji tekstu z podkładem muzycznym z YouTube. Musieliśmy zdecydować, jak przechowywać tekst: jako jeden duży blok tekstu czy jako pojedyncze linie.

### Decyzja
Wprowadzenie dedykowanej encji `LyricLine` powiązanej z utworem relacją **One-to-Many**.
* **Struktura bazy:** Każda linia posiada pola `time_stamp_start` i `time_stamp_end` (milisekundy).
* **Wyświetlanie:** Frontend otrzymuje listę obiektów JSON i podświetla aktualną linię na podstawie czasu z odtwarzacza YouTube.

### Konsekwencje
* **Plusy:** Możliwość przewijania piosenki do konkretnego momentu, łatwe formatowanie napisów.
* **Minusy:** Większa liczba rekordów w bazie danych dla pojedynczego utworu.