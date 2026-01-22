# Konfiguracja narzędzi i środowiska wytwórczego
W celu zapewnienia wysokiej jakości kodu, sprawnej komunikacji w zespole oraz automatyzacji procesów, w projekcie skonfigurowano następujące narzędzia:

## 1. Kontrola wersji (Version Control)
* **Narzędzie:** Git.

* **Platforma hostująca:** GitHub.

* **Strategia branchingu:** Zespół korzysta z modelu **GitHub Flow**. Główna gałąź (`main`) zawiera kod stabilny. Prace nad nowymi funkcjonalnościami (np. system logowania, odtwarzacz) odbywają się na osobnych gałęziach typu `feature/`, które są scalane z `main` wyłącznie poprzez **Pull Requests** po wcześniejszej weryfikacji kodu (Code Review).

## 2. Narzędzie do zarządzania projektem (Project Management)
* **Narzędzie:** GitHub Projects (Tablica Kanban).

* **Metodyka:** Agile/Scrum.

* **Konfiguracja:** Zadania są monitorowane za pomocą **GitHub Issues**. Każde zadanie posiada przypisaną osobę odpowiedzialną oraz etykietę (np. `backend`, `frontend`, `documentation`). Postęp prac wizualizowany jest na tablicy Kanban z podziałem na kolumny:

  * `Todo`: Zadania oczekujące.

  * `In Progress`: Zadania w trakcie realizacji.

  * `Done`: Zadania ukończone i przetestowane.

## 3. Potok CI (Continuous Integration)
W projekcie zaimplementowano automatyzację procesów testowania i budowania aplikacji za pomocą narzędzia **GitHub Actions**. Skonfigurowany przepływ pracy (workflow) pozwala na wczesne wykrywanie błędów i zapewnia, że każda zmiana w kodzie jest kompatybilna z resztą systemu.

**Wyzwalanie potoku (Triggers)**
Potok jest uruchamiany automatycznie w następujących przypadkach:

* Każdy **Push** do gałęzi `main`.

* Otwarcie lub aktualizacja **Pull Request** do gałęzi `main`.

**Etapy potoku (Workflow Jobs)**
Potok został podzielony na dwa główne procesy działające równolegle, co przyspiesza czas trwania testów:

**1. Backend Verification (Java/Spring Boot)**
Ten etap odpowiada za sprawdzenie poprawności części serwerowej:

* **Setup JDK:** Przygotowanie środowiska Java (np. OpenJDK 17/21).

* **Dependency Cache:** Buforowanie zależności Maven/Gradle, aby skrócić czas kolejnych uruchomień.

* **Compilation:** Sprawdzenie, czy kod kompiluje się bez błędów.

* **Unit Tests:** Uruchomienie testów jednostkowych (JUnit 5). Jeśli choć jeden test nie przejdzie, cały potok zostaje zatrzymany, a zmiana oznaczona jako "Failed".

* **Artifact Building:** Próbne zbudowanie pliku `.jar`, aby upewnić się, że aplikacja jest gotowa do konteneryzacji.

**2. Frontend Verification (Vue.js)**
Ten etap sprawdza poprawność warstwy prezentacji:

* **Setup Node.js:** Konfiguracja środowiska uruchomieniowego Node.js.

* **Install Dependencies:** Instalacja bibliotek zdefiniowanych w `package.json`.

* **Linting:** Uruchomienie narzędzia **ESLint**. Sprawdza ono kod pod kątem zgodności ze standardami (np. brak nieużywanych zmiennych, poprawna składnia).

* **Production Build:** Uruchomienie komendy `npm run build`. Proces ten weryfikuje, czy aplikacja poprawnie buduje się do plików statycznych (HTML/JS/CSS).

**Korzyści dla projektu**
Dzięki tak skonfigurowanemu potokowi CI:

1. **Eliminujemy błędy "u mnie działa":** Kod jest sprawdzany w czystym, odizolowanym środowisku.

2. **Utrzymujemy czystość kodu:** Automatyczny linting wymusza na wszystkich członkach zespołu ten sam styl programowania.

3. **Szybka informacja zwrotna:** Programista dowiaduje się o błędzie w ciągu 2-3 minut od wysłania kodu na serwer.

## 4. Platforma dokumentacji (Documentation Platform)
* **System dokumentacji:** GitHub Markdown + Dedykowane Repozytorium.

* **Struktura:** Dokumentacja projektowa jest odseparowana od kodu źródłowego i przechowywana w dedykowanym repozytorium w folderze `/zaliczenie`. Pozwala to na niezależne wersjonowanie opisów technicznych, sprawozdań oraz instrukcji użytkownika.

* **Dokumentacja API:** Do opisu punktów końcowych (endpoints) wykorzystywany jest standard **OpenAPI (Swagger)**. Dokumentacja techniczna API jest generowana automatycznie przez backend i dostępna w czasie rzeczywistym podczas pracy aplikacji, co ułatwia integrację frontendu z backendem.
