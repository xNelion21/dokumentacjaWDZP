# Diagram Przepływu Danych (DFD)

Poniższy schemat przedstawia przepływ informacji w systemie Karaoke Machine – od interakcji użytkownika, przez logikę biznesową, aż po zewnętrzne API i bazę danych hostowaną na Aiven.

```mermaid

graph TD
    %% Definicja aktorów
    User((Użytkownik))
    Admin((Administrator))

    subgraph "Warstwa Prezentacji (Frontend)"
        UI[Interfejs Vue.js]
        Forms[Formularze i Widoki]
    end

    subgraph "Procesy Systemowe (Backend Spring Boot)"
        Auth[Autoryzacja i Role]
        Logic[Logika Biznesowa / Serwisy]
        DataProc[Przetwarzanie Danych]
    end

    subgraph "Magazyny Danych i Serwisy"
        DB[(PostgreSQL - Aiven)]
        YT[YouTube Data API v3]
    end

    %% Przepływ danych
    User -- "Wprowadzanie danych / Wybór piosenki" --> Forms
    Admin -- "Zarządzanie sugestiami / Banowanie" --> Forms
    
    Forms -- "Żądanie HTTP (JSON)" --> Auth
    Auth -- "Zweryfikowane uprawnienia" --> Logic
    
    Logic -- "Zapytanie o metadane wideo" --> YT
    YT -- "Dane o utworze (tytuł, id)" --> Logic
    
    Logic -- "Zapis/Odczyt (JPA)" --> DataProc
    DataProc -- "Relacyjny zapis danych" --> DB
    DB -- "Wynik zapytania" --> DataProc
    
    DataProc -- "Obiekt DTO (JSON)" --> UI

```