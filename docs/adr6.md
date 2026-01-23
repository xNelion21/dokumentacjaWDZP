# ADR 6: Globalna obsługa błędów API

**Data:** 2025-12-28
**Status:** Zaakceptowane  
**Autorzy:** Zespół projektowy

## Kontekst
Domyślne błędy zwracane przez Spring Boot (np. Whitelabel Error Page) są nieczytelne dla klienta napisanego w Vue.js i utrudniają debugowanie.

## Decyzja
Zastosowanie wzorca **Global Exception Handler** przy użyciu adnotacji `@ControllerAdvice`.

## Szczegóły implementacji
* Stworzono klasę `GlobalExceptionHandler`, która przechwytuje wyjątki (np. `ResourceNotFoundException`, `AccessDeniedException`).
* Każdy błąd zwraca ujednolicony obiekt JSON o strukturze:

  ```json

  {
    "timestamp": "2024-06-05T12:00:00",
    "message": "Opis błędu dla użytkownika",
    "status": 404,
    "error": "Not Found"
  }

  ```

