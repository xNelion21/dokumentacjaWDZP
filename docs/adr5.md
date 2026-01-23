# ADR 5: System moderacji - Sugestie

**Data:** 2025-12-28
**Status:** Zaakceptowane  
**Autorzy:** Zespół projektowy

## Kontekst
Aplikacja pozwala użytkownikom na dodawanie propozycji nowych utworów. Bezpośrednie dodawanie danych do głównej bazy mogłoby prowadzić do niskiej jakości treści (niedziałające linki YouTube, błędne teksty).

## Decyzja
Wprowadzenie mechanizmu **dwuetapowego dodawania piosenek** poprzez system sugestii.

## Szczegóły implementacji
* Każdy nowy utwór trafia najpierw do tabeli `SUGGESTIONS` (lub posiada status `PENDING` w tabeli głównej).
* Użytkownik z rolą `ROLE_ADMIN` posiada dostęp do panelu moderacyjnego, gdzie może:
    * **Zaakceptować (Approve)**: Przenosi utwór do bazy publicznej.
    * **Odrzucić (Reject)**: Usuwa sugestię lub zmienia jej status na niewidoczny.
* Zastosowano logikę biznesową w serwisie Spring Boot, która filtruje utwory zwracane użytkownikom końcowym.



## Konsekwencje
* **Bezpieczeństwo**: Pełna kontrola nad treściami wyświetlanymi w aplikacji.
* **UX**: Użytkownik otrzymuje informację zwrotną, że jego propozycja oczekuje na weryfikację.
* **Dodatkowy nakład pracy**: Konieczność stworzenia dodatkowych widoków w panelu administratora.