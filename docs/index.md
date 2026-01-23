# O projekcie

## Geneza i cel projektu
Projekt **Karaoke Machine** powstał jako praca zaliczeniowa w ramach przedmiotu projektowego na studiach. Głównym celem było stworzenie funkcjonalnej aplikacji internetowej, która integruje nowoczesne technologie webowe z zewnętrznymi serwisami multimedialnymi.

System został zaprojektowany i zbudowany zgodnie z  zasadami inżynierii oprogramowania:
* Prowadzenie dokumentacji technicznej i produktowej.
* Zarządzanie procesem wytwórczym (podział na sprinty, retrospekcje).
* Rejestrowanie kluczowych decyzji projektowych (ADR).

Oraz odgórnymi wymogami dot. funkcjonalnosci projektu:
* Użytkownik - User może się zarejestrować i zalogować w systemie
* User ma możliwość przeglądania piosenek i dodawanie ich do polubionych
* User ma możliwość dodawanie sugestii zmiany tekstu i znaczników czasowych 
* Piosenki powinny odtwarzać się z zewnętrznego źródła
* Na ekranie powinien wyświetlać się tekst piosenki zsynchronizowany z tym w piosence 
* Administrator ma możliwość zarządzanie userami i piosenkami (dodawanie, usuwanie, edycja, zmiana ról, banowanie, aktceptacja sugestii)
* Rejestracja powinna odbywać się przez email i facebook

## Główny zamysł aplikacji
Główną ideą projektu jest umożliwienie użytkownikom korzystania z interaktywnej platformy do karaoke. Aplikacja nie tylko odtwarza podkłady muzyczne, ale przede wszystkim synchronizuje wyświetlany tekst z czasem trwania utworu, co jest kluczowe dla komfortu śpiewania. System posiada również moduł sugestii, pozwalający społeczności na rozbudowę bazy utworów pod nadzorem administratora.

## Wykorzystany stos technologiczny
Wybór technologii był podyktowany chęcią kontynuacji i pogłębienia wiedzy zdobytej w poprzednim semestrze, co pozwoliło nam na skupienie się na bardziej zaawansowanych funkcjonalnościach systemu (takich jak integracja z zewnętrznym API czy złożone relacje bazodanowe).

### Backend: Spring Boot (Java)
Warstwa serwerowa opiera się na frameworku Spring Boot. Wybraliśmy go ze względu na:
* znajomość ekosystemu Java z poprzedniego semestru
* Wbudowane mechanizmy bezpieczeństwa (Spring Security).
* Łatwość tworzenia architektury RESTful.

### Frontend: Vue.js
Interfejs użytkownika został zbudowany jako aplikacja typu SPA (Single Page Application) w frameworku Vue.js. Wybór ten pozwolił na:
* Stworzenie dynamicznego i reaktywnego interfejsu.
* Płynną obsługę odtwarzacza wideo bez przeładowywania strony.
* Wykorzystanie doświadczenia w tworzeniu komponentów webowych.

### Baza danych: PostgreSQL z zastosowaniem komunikacji za pomocą JPA (Java Persistence API) z implementacją Hibernate.
Jako magazyn danych wykorzystaliśmy relacyjną bazę PostgreSQL. Wybór ten był naturalny ze względu na:
* Potrzebę zachowania silnych relacji między piosenkami, autorami i tekstem (Lyric Lines).
* Stabilność i wydajność rozwiązania.
* Możliwość łatwego hostowania bazy w chmurze (Aiven), co ułatwiło pracę zespołową.

## Podsumowanie
Karaoke Machine to efekt połączenia naszych dotychczasowych umiejętności z nowymi wyzwaniami, takimi jak zarządzanie cyklem życia produktu i automatyzacja wdrożeń. Projekt ten stanowi solidną bazę pod dalszy rozwój aplikacji o kolejne moduły społecznościowe.