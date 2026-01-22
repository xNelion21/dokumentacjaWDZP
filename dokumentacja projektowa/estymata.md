# Estymata prac – Karaoke Machine (Singly)

## 1. Cel dokumentu

Celem niniejszego dokumentu jest przedstawienie estymaty prac projektowych
dla aplikacji **Karaoke Machine (Singly)**. Estymata została opracowana na podstawie Product Backlogu,
PRD oraz rzeczywistego przebiegu realizacji projektu.

---

## 2. Metoda estymacji

Do oszacowania nakładu pracy wykorzystano:
- **Story Points (SP)** – do określenia złożoności historyjek użytkownika,
- **przeliczenie SP na godziny robocze**, w celu lepszego zobrazowania
  rzeczywistego nakładu pracy zespołu.

### Skala Story Points

| Story Points | Charakterystyka | Średni czas |
|-------------|-----------------|-------------|
| 1 | Bardzo proste zadanie | 2 h |
| 2 | Proste zadanie | 4 h |
| 3 | Średnie zadanie | 6 h |
| 5 | Złożone zadanie | 10 h |
| 8 | Bardzo złożone | 16 h |
| 13 | Wysokie ryzyko techniczne | 24 h |

---

## 3. Estymata backlogu

### Epik E1 – Autoryzacja i bezpieczeństwo

| ID | Historyjka | SP | Godziny |
|----|-----------|----|---------|
| US-1 | Rejestracja użytkownika | 3 | 6 |
| US-2 | Logowanie użytkownika | 3 | 6 |
| US-3 | Logowanie Google / Facebook | 5 | 10 |
| US-4 | Zabezpieczenie endpointów JWT | 5 | 10 |
| US-5 | Role USER / ADMIN | 3 | 6 |
| **Suma E1** |  | **19** | **38** |

---

### Epik E2 – Funkcje użytkownika

| ID | Historyjka | SP | Godziny |
|----|-----------|----|---------|
| US-6 | Wyszukiwanie piosenek | 3 | 6 |
| US-7 | Lista ulubionych | 5 | 10 |
| US-8 | Propozycje zmian tekstów | 5 | 10 |
| **Suma E2** |  | **13** | **26** |

---

### Epik E3 – Zarządzanie treścią karaoke

| ID | Historyjka | SP | Godziny |
|----|-----------|----|---------|
| US-9 | Synchronizacja tekstu karaoke | 8 | 16 |
| US-10 | Kategorie i autorzy | 3 | 6 |
| **Suma E3** |  | **11** | **22** |

---

### Epik E4 – Administracja

| ID | Historyjka | SP | Godziny |
|----|-----------|----|---------|
| US-11 | Zarządzanie użytkownikami | 5 | 10 |
| US-12 | Moderacja propozycji | 5 | 10 |
| **Suma E4** |  | **10** | **20** |

---

### Epik E5 – Integracje

| ID | Historyjka | SP | Godziny |
|----|-----------|----|---------|
| US-13 | Integracja YouTube API | 8 | 16 |
| **Suma E5** |  | **8** | **16** |

---

## 4. Podsumowanie estymaty

| Zakres | Story Points | Godziny |
|------|-------------|---------|
| Autoryzacja i bezpieczeństwo | 19 | 38 |
| Funkcje użytkownika | 13 | 26 |
| Zarządzanie treścią | 11 | 22 |
| Administracja | 10 | 20 |
| Integracje | 8 | 16 |
| **Łącznie** | **61 SP** | **122 h** |


