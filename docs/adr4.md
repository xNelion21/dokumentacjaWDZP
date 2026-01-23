# ADR 4: Wybór hostingu bazy danych (Aiven)

**Data:** 2026.01.10
**Status:** Zaakceptowane  
**Autorzy:** Zespół projektowy

## Kontekst
W początkowej fazie projektu korzystaliśmy z lokalnych instancji bazy danych PostgreSQL. Jednak praca w zespole rozproszonym oraz potrzeba automatyzacji testów i wdrożeń (CI/CD) wymagały bazy danych dostępnej 24/7 z dowolnego miejsca.

## Rozważane opcje
1. **Lokalny serwer u jednego z deweloperów**: Problemy z dostępnością i przekierowaniem portów.
2. **Docker na serwerze uczelnianym**: Brak gwarancji stałego dostępu i trudniejsza konfiguracja.
3. **Managed Cloud Database (Aiven/Heroku/Render)**: Rozwiązania gotowe do użycia (SaaS).

## Decyzja
Zdecydowano się na wykorzystanie platformy **Aiven** jako dostawcy zarządzanej bazy danych PostgreSQL.

## Uzasadnienie
* **Dostępność**: Baza jest dostępna w chmurze, co umożliwia połączenie z nią zarówno z lokalnych środowisk deweloperskich (IntelliJ), jak i z serwerów GitHub Actions.
* **Łatwość konfiguracji**: Aiven dostarcza gotowy URL połączenia oraz certyfikaty SSL, co skróciło czas konfiguracji Spring Boota.
* **Darmowy plan**: Plan "Free" oferuje wystarczającą wydajność i pojemność dla projektu studenckiego.

## Konsekwencje
* Konieczność zabezpieczenia danych dostępowych w pliku `application.properties` (użycie zmiennych środowiskowych).
* Zależność projektu od zewnętrznego dostawcy (wymagane połączenie z Internetem do pracy).