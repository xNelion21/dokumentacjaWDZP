# Wprowadzenie do zarządzania projektami deweloperskimi

Materiały edukacyjne dla studentów realizujących projekty zespołowe z wykorzystaniem metodyk zwinnych.

## Struktura repozytorium

### lab - katalog z materiałami z laboratorium
```
lab/
├── checklists/    # Listy kontrolne
├── docs/          # Przewodniki i teoria
├── examples/      # Przykłady wypełnionych dokumentów
├── templates/     # Gotowe szablony do wypełnienia
├── tools-setup/   # Instrukcje konfiguracji narzędzi
├── workshops/     # Materiały warsztatowe
```
### zaliczenie - katalog przeznaczony na prace studentów 

## Listy kontrolne (Checklists)

Aby ułatwić zarządzanie projektem, zostały przygotowane listy kontrolne, które prowadzą zespół krok po kroku przez kluczowe etapy projektu. Pomagają one upewnić się, że wszystkie ważne zadania zostały wykonane.

- [Checklista startu projektu](lab/checklists/start-projektu-checklist.md) – zawiera zadania, które należy wykonać przed rozpoczęciem pierwszego sprintu.

## Jak zacząć?

### Krok 1: Zrozum podstawy

Przeczytaj przewodniki w folderze `lab/docs/00-wprowadzenie/`, aby poznać kluczowe pojęcia, takie jak Agile, Scrum i Kanban.

### Krok 2: Wybierz narzędzia

1.  **Narzędzie do zarządzania projektem:** Zapoznaj się z [porównaniem narzędzi](lab/docs/03-realizacja/narzedzia-pm.md).
2.  **Generator dokumentacji:** Przeczytaj [porównanie generatorów stron statycznych](lab/docs/04-dokumentacja/static-site-generators.md).

### Krok 3: Przygotuj artefakty projektowe (możesz używać szablonów)

1. **Stwórz PRD (Dokument Wymagań Produktu):** Dla głównych funkcjonalności przygotuj dokument wymagań, korzystając z [szablonu PRD](lab/templates/05-prd-template.md).
2. **Dokumentuj decyzje architektoniczne (ADR):** Każdą ważną decyzję techniczną (np. wybór bazy danych, frameworka) zapisz w [szablonie ADR](lab/templates/06-adr-template.md).
3. **Zdefiniuj persony:** Stwórz 2-3 profile użytkowników, korzystając z [szablonu persony](lab/templates/01-personas-template.md).
4. **Przeprowadź Event Storming:** Zmapuj procesy biznesowe, korzystając z [szablonu Event Storming](lab/templates/03-event-storming-template.md).
5. **Napisz historyjki użytkownika:** Opisz funkcjonalności z perspektywy użytkownika, używając [szablonu historyjki](lab/templates/02-user-story-template.md).
6. **Stwórz backlog i estymuj zadania:** Zbierz wszystkie historyjki w jednym miejscu (backlogu) i oszacuj ich złożoność.

### Krok 4: Zacznij pracę w sprintach

Dopiero po przygotowaniu artefaktów z kroku 3. możesz zacząć pracę w iteracjach (sprintach), organizując regularne spotkania:
- **Planowanie sprintu:** Wybierzcie historyjki i zdefiniujcie cel.
- **Codzienne spotkania:** Synchronizujcie postępy i omawiajcie problemy.
- **Przegląd sprintu:** Demonstrujcie działający kod i zbierajcie opinie.
- **Retrospektywa:** Analizujcie, co poszło dobrze, a co źle, i planujcie ulepszenia, korzystając z [szablonu retrospektywy](lab/templates/07-retrospective.md).

### Krok 5: Stwórz dokumentację końcową

Przenieś wszystkie stworzone dokumenty i procesy do wybranego generatora stron statycznych i opublikuj stronę na publicznie dostępnej platformie (np. GitHub Pages, Netlify, Vercel).

## Lista kontrolna na koniec projektu

Na koniec semestru projekt powinien zawierać działający kod oraz kompletną dokumentację opublikowaną jako strona statyczna.
Wszystkie wytworzone dokumenty, itp. należy umieścić w katalogu `zaliczenie`.

### Główne kategorie dokumentacji:

1.  **Dokumentacja Produktowa i Projektowa**:
    -   Opisuje "co" i "dlaczego" budujemy.
    -   Zawiera m.in. PRD, persony, historyjki użytkownika, backlog i metryki zwinne.
    -   Sprinty można dokumentować w postaci zrzutów ekranów + opis słowny.
    -   Retrospektywy (min. 2) również należy udokumentować.
    -   Udokumentowana sesja Event Stormingu.
2.  **Dokumentacja Techniczna**:
    -   Opisuje "jak" system jest zbudowany.
    -   Zawiera m.in. ADR-y, instrukcję uruchomienia projektu, opis środowiska i wszystkie technikalia.
    -   Mile widziane diagramy (np. ERD bazy danych, UML (np. w mermaid.js))
3.  **Dokumentacja Użytkownika**:
    -   Wyjaśnia, jak korzystać z aplikacji.
    -   Zawiera m.in. przewodnik użytkownika i FAQ.
    -   Można załączać zrzuty ekranu przedstawiające interfejs aplikacji, ale należy je opisać słownie.
4.  **Dokumentacja API**:
    -   Obowiązkowa, jeśli projekt udostępnia API.
    -   Powinna zawierać wyrenderowaną specyfikację OpenAPI oraz przewodnik po API (np. jak się autoryzować, itp.).
