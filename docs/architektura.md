\# Architektura Systemu



Projekt Karaoke App został zbudowany w architekturze klient-serwer z podziałem na warstwy.



\## Schemat logiczny

\- \*\*Frontend\*\*: Aplikacja typu SPA (Single Page Application) zbudowana w frameworku \*\*Vue.js\*\*. Odpowiada za interfejs użytkownika i komunikację z API.

\- \*\*Backend\*\*: Serwis RESTful zbudowany w \*\*Spring Boot (Java)\*\*. Obsługuje logikę biznesową, mapowanie obiektów (MapStruct/Custom Mappers) oraz bezpieczeństwo.

\- \*\*Baza Danych\*\*: Relacyjna baza danych \*\*PostgreSQL\*\* hostowana na platformie Aiven.



\## Diagram przepływu danych

```mermaid

graph LR

&nbsp;   A\[Vue.js Frontend] -- HTTP/JSON --> B\[Spring Boot API]

&nbsp;   B -- JPA/Hibernate --> C\[(PostgreSQL Database)]

&nbsp;   B -- External API --> D\[YouTube API]

