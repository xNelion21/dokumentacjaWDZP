# **Przebieg tworzenia aplikacji karaoke \- machine**

**Autorzy:** Roksana Żyłka, Kamil Kubrak, Mikołaj Wołoszyn, Kamil Ziemiański, Marcin Szuszko

### **Tydzień I \- Początkowe założenia dot. projektu (13-09)**

10.09.25 \- Nasz zespół ustalił wstępne założenia: Ze względu na to, że Ja i Kamil Kubrak tworzyliśmy już zespół w poprzednim półroczu, pozostaliśmy przy dotychczasowych metodach i językach programowania, tj. Vue \- frontend i Spring \- backend. Używane HTML i Java. Nasz zespół w tym półroczu poszerzył się o 2 osoby: Kamila Ziemiańskiego oraz Marcina Szuszko. Programowali oni w php i laravel.

Jednak doszliśmy do konkluzji, że łatwiej będzie 3 osobom wprowadzić w nowy język 2 osoby, niż na odwrót. Tak więc Kamil Ziemiański przyjął rolę frontendowca pod okiem Mikołaja Wołoszyna, natomiast Marcin Suszko \- backendowca, pod moim okiem.

### **Tydzień II \- MVP**

Jako lider grupy stworzyłam plan działania, podział obowiązków i dodałam do istniejącego repozytorium na github. Jako zespół spotykaliśmy się online na messenger i omawialiśmy kolejne etapy projektu. Ustaliliśmy, że Ja robię logikę logowania, i logikę dot klasy User. wzorując się na plikach stworzonych przeze mnie Marcin stworzył encję i logikę dot. Piosenki. Mikołaj Wołoszyn odpowiedzialny był za tworzenie widoków w Vue, natomiast Kamil Ziemiański \- kontrolerów.

### **Tydzień III \- Dalsze działania rozwojowe**

Kolejny tydzień poświęcony był rozwojowi aplikacji i wdrażaniu Marcina i Kamila w środowisko programistyczne. Kamil Kubrak odpowiedzialny był za testy których nie zrobił, bo mu się zepsuł intelIIJ \- testy oficjalnie rozpoczęły się V tygodnia. Na tym etapie logika logowania i autoryzacji stworzona przeze mnie jest już gotowa i przetestowana przeze mnie przed aplikację Postman. Mamy też stronę Widok logowania i Rejestracji w Vue \- na tym etapie niezintegrowany z backendem.

### **Tydzień IV \- Przestój**

W związku z wyjazdem Kamila i Mikołaja, mieliśmy jeden tydzień postoju. Marcin Stworzył w tym czasie logikę wyszukiwania i dodawania sugestii. Utworzył także nowe kontrolery, dto i serwisy a całość poszła mu bardzo sprawnie i niemalże bezbłędnie. Natknęliśmy się na kluczowy problem \- odmowę dostępu: Błąd wystąpił z mojej winy, ponieważ zapomniałam dodać do klasy konfiguracyjnej SecurityConfig nowych endpointów, a Marcin powielił mój błąd. Pozbyliśmy się go jednak, a ja zrobiłam testy żeby upewnić się, że metody POST i GET działają poprawnie. Sprawdzałam również frontend w przeglądarce, bo zaczął wyrzucać błędy. Okazało się, że wystapił problem z axios którego przyczyną było błędne zainicjowanie pola przez frontendowców, które było niespójne z naszym backendem.

### **Tydzień V \- Dalsze działania**

### **Tydzień VI \- Backend prawie na wykończeniu, integracja Frontendu**

Mikołaj Wołoszyn i Kamil Ziemiański zintegrowali stronę rejestracji, logowania i dashboard z Backendem. Strona teraz poprawnie wyświetla zalogowanego usera, jego rolę oraz rekordy z bazy. Wystawiłam nowe API api/admin oraz endpointy dot. zarządzania użytkownikami, piosenkami i requestami. Dodałam także wymagane metody do SongService i UserService i dokonałam poprawek dot. Zabezpieczeń (powracający błąd 403 \- Forbidden przy testach w Postman był wynikiem warunku hasRole(ADMIN). Po zmianie na HasAuthority(ROLE\_ADMIN) problem zniknął. Na spotkaniu w piątek 21.11 ustaliliśmy, że kolejnym krokiem będzie zbudowanie przez frontendowców widoku panelu admina, komponentów dot. zarządzania requestami, użytkownikami itp i integrację z backendem.

### **Tydzień VII \- front NIEzintegrowany (24.11 \- 30.11)**

Projekt stoi w miejscu \- Mikołaj Wołoszyn i Kamil Ziemiański nadal pracują nad integracją frontendu. Rozpoczęłam pracę nad dokumentacją.

### **Tydzień VIII-IX \- Kluczowe zmiany w projekcie (01.12 \- 12.12)**

Mikołaj Wołoszyn I Kamil Ziemiański dostarczyli kod, który pokazuje poprawnie działający Panel Admina, oraz wyświetlanie tekstu piosenki. Na dzień 5.12 obie te rzeczy wymagają dopracowania. Doszliśmy również do wniosku, że należy dostosować backend pod listę “ulubionych” \- ponieważ w bazie nie mamy takiej tabelki, ani relacji.

Zespół wykonał pierwszą sesję retrospekcji i event stormingu. Rozdzieliliśmy podział obowiązków: Mikołaj i Kamil dopracowują frontend, Ja(Roksana) Wykonuje poprawki na backendzie i rozpoczynam wdrażanie logowania przez google, facebook. Marcin Szuszko poprawia logikę wyświetlania tekstu na backendzie. Ustaliliśmy również, że ja zrobię diagramy UML, Marcin ERD.

Kłopoty które napotkałam na swojej drodze to pętle Beanów, które potrzebowały innego Beana który był w tej samej klasie, która potrzebowała Beana nr 1 i tak w kółko \- rozwiązaniem było rozdzielenie metody na dwie klasy.

### **Tydzień XI (22.12 \- 27.12.25) \- Aktualizacja frontendu i bazy danych**

Mikołaj Wołoszyn naniósł poprawki zarówno na frontendzie jak i backendzie co wywołało kilka niezgodności, ale poprawiono to w przerwie świątecznej. Zauważył i poprawił również pętlę która wywoływała się z mojej winy. Na dzień 4.01.2026 mamy już dobrze funkcjonującą aplikację \- dzięki zmianom mikołaja aplikacja jest poprawnie zintegrowana z backendem.

Kluczowe zmiany: należało podjąć decyzję jak aplikacja ma wykonywać operacje na danych \- do tej pory pobierała dane z bazy lokalnej, należało rozbudować ją tak aby pobierała dane z Youtube, a to wymagało decyzji, czy zostawić istniejące metody, czy usunąć je i wprowadzić nowe czy jeszcze coś innego. Ja byłam osobą odpowiedzialną za operacje na danych oraz zabezpieczeniach więc podjęłam decyzję o zostawieniu metod które operują na danych lokalnych i wprowadzeniu nowych metod i endpointów które operować będą na zewnętrznych linkach.

**Dodatkowe aspekty techniczne rozwiązane w tym tygodniu:**

* **Integracja YouTube API:** Wprowadzono endpointy `search-online` oraz `like`, umożliwiając dynamiczne budowanie bazy piosenek.  
* **Stabilizacja JWT:** Rozwiązano problemy z wygasającymi tokenami (Error 401\) poprzez ujednolicenie klucza Secret Key i konfigurację czasu wygaśnięcia w `application.properties`.  
* **Synchronizacja SQL:** Naprawiono błąd `Unknown column 'thumbnail_url'`, który wystąpił po dodaniu nowych pól do klasy Song bez aktualizacji schematu bazy MySQL.

### **Tydzień XII (01.01 \- 04.01.2026) \- Finalizacja i Debugging**

Ostatni tydzień poświęcony był na usuwanie błędów blokujących komunikację Frontend-Backend.

* **Rozwiązanie błędów CORS:** Skonfigurowano `SecurityConfig`, aby akceptował żądania z portów `5173` i `5175`, co odblokowało proces logowania w przeglądarce.  
* **Naprawa autoryzacji profilu:** Wykryto przyczynę błędu 401 przy próbie pobrania danych przez `/api/users/me` – problemem był brak przesyłania nagłówka `Authorization` przez frontend zaraz po logowaniu.  
* **Wynik końcowy:** Aplikacja poprawnie obsługuje pełny przepływ: logowanie \-\> wyszukiwanie YouTube \-\> polubienie piosenki \-\> wyświetlenie piosenki w profilu użytkownika.

