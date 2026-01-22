# Opis środowiska aplikacji: “karaoke machine” 

`Architektura, języki:` 

| Warstwa | Technologia / Język | Wersja | Cel |
| :---- | :---- | :---- | :---- |
| **Backend** | **Spring Boot** (Framework) | Linia **3.x** | Budowanie logiki biznesowej, uwierzytelniania JWT i udostępnianie API REST. |
| **Język Backendu** | **Java** | **21 LTS** | Język programowania dla całego kodu logiki serwera. |
| **Frontend** | **Vue.js** (Framework) / **Vite** (Build Tool) | Najnowsza stabilna | Interfejs użytkownika, obsługa routingu i wyświetlanie danych. |
| **Zarządzanie Pakietami** | **Gradle** (Java) / **npm** (Vue.js) | Najnowsze stabilne | Zarządzanie zależnościami i automatyzacja budowania projektów. |

`Baza danych i konteneryzacja:` 

| Element | Technologia | Cel / Funkcja |
| :---- | :---- | :---- |
| **Baza Danych** | **MySQL** | Główna relacyjna baza danych przechowująca użytkowników, piosenki, kategorie, autorów i relacje. |
| **Konteneryzacja** | **Docker** / **Docker Compose** | Służy do zapewnienia **spójnego środowiska deweloperskiego**. Umożliwia łatwe uruchamianie kontenerów bazodanowych (db) i serwerowych. |
| **Połączenie DB** | JDBC | Spring łączy się z bazą danych za pomocą sterownika MySQL. |

 `Moduły i Zależności Backendu:`

* `Spring Security: Zaimplementowany mechanizm JWT (JSON Web Token) do uwierzytelniania i autoryzacji opartej na rolach (RBAC). Używa BCryptPasswordEncoder do hashowania haseł.`  
* `Spring Data JPA: Umożliwia komunikację z bazą danych i definiowanie repozytoriów.`

* `Spring Web: Udostępnia adnotacje @RestController do tworzenia endpointów API.`

* `Lombok: Narzędzie do automatycznego generowania boilerplate code (getterów, setterów, konstruktorów).`

* `JWT: Biblioteka do generowania i weryfikacji tokenów JWT.`  
  