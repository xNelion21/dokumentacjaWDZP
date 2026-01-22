# Product Backlog – Karaoke Machine (Singly)

## Informacje ogólne
- **Projekt:** Karaoke Machine (Singly)
- **Metodyka:** Scrum
- **Zespół:** 5 osób
- **Źródło wymagań:** Product Requirements Document (PRD)
- **Zakres:** Backend + integracja Frontend

---

## Epiki

| ID | Epik | Opis |
|----|------|------|
| E1 | Autoryzacja i bezpieczeństwo | Logowanie, rejestracja, role |
| E2 | Zarządzanie użytkownikiem | Funkcje użytkownika |
| E3 | Zarządzanie treścią | Piosenki, teksty, wyszukiwanie |
| E4 | Administracja | Panel admina |
| E5 | Integracje | YouTube API |

---

## Backlog – User Stories

### E1 – Autoryzacja i bezpieczeństwo

| ID | User Story | Priorytet |
|----|-----------|----------|
| US-1 | Jako użytkownik chcę się zarejestrować, aby korzystać z aplikacji | Wysoki |
| US-2 | Jako użytkownik chcę się zalogować do systemu | Wysoki |
| US-3 | Jako użytkownik chcę logować się przez Facebook / Google | Średni |
| US-4 | Jako system chcę zabezpieczać endpointy JWT | Wysoki |
| US-5 | Jako system chcę rozróżniać role USER i ADMIN | Wysoki |

---

### E2 – Funkcje użytkownika

| ID | User Story | Priorytet |
|----|-----------|----------|
| US-6 | Jako użytkownik chcę wyszukiwać piosenki | Wysoki |
| US-7 | Jako użytkownik chcę dodawać piosenki do ulubionych | Średni |
| US-8 | Jako użytkownik chcę zgłaszać poprawki tekstów | Średni |

---

### E3 – Zarządzanie treścią karaoke

| ID | User Story | Priorytet |
|----|-----------|----------|
| US-9 | Jako system chcę przechowywać teksty piosenek z synchronizacją | Wysoki |
| US-10 | Jako system chcę obsługiwać kategorie i autorów | Średni |

---

### E4 – Administracja

| ID | User Story | Priorytet |
|----|-----------|----------|
| US-11 | Jako admin chcę zarządzać użytkownikami | Wysoki |
| US-12 | Jako admin chcę moderować propozycje zmian | Wysoki |

---

### E5 – Integracje

| ID | User Story | Priorytet |
|----|-----------|----------|
| US-13 | Jako system chcę integrować się z YouTube API | Średni |

---

## Definition of Done
- Endpoint działa poprawnie
- Zabezpieczenia działają
- Funkcja przetestowana
- Kod znajduje się w repozytorium
- Dokumentacja zaktualizowana
