# 🤝 Standardy Współpracy (CONTRIBUTING)

Dokument ten definiuje zasady pracy zespołowej, standardy kodowania oraz proces wdrażania zmian w projekcie **Karaoke Machine**.

---

## 🚀 Workflow Pracy z Kodem

Aby zachować spójność repozytorium i uniknąć konfliktów, trzymamy się poniższych kroków:

1. **Aktualizacja**: Przed rozpoczęciem pracy zawsze wykonaj `git pull origin main`.
2. **Praca nad zadaniem**: Zmiany wprowadzamy na dedykowanych branchach funkcyjnych (np. `feature/login-system`) lub bezpośrednio na `main` po uzgodnieniu z zespołem.
3. **Commitowanie**: Opisy muszą być jasne i wskazywać, co zostało zmienione.
   * *Przykład:* `fix: poprawa błędu w mapperze piosenek` lub `feat: dodanie wyszukiwarki`.
4. **Weryfikacja**: Przed wysłaniem kodu (`git push`), upewnij się, że aplikacja buduje się lokalnie i nie zawiera błędów.

---

## 🛠️ Standardy Techniczne

### Backend (Java / Spring Boot)
* **Konwencja**: Stosujemy **CamelCase** dla nazw zmiennych i metod.
* **Optymalizacja**: Obowiązkowe użycie biblioteki **Lombok** (ograniczenie kodu boilerplate).
* **Mapowanie**: Do konwersji między encjami a DTO wykorzystujemy **MapStruct** lub dedykowane mappery.

### Frontend (Vue.js)
* **API**: Wszystkie komponenty budujemy z wykorzystaniem **Composition API**.
* **Style**: Trzymamy się spójnego systemu klas i komponentów, aby interfejs był jednolity.

---

## 📝 Dokumentacja i Jakość

* **Aktualizacja API**: Każda nowa funkcjonalność lub zmiana endpointu **musi** zostać odnotowana w pliku `docs/api.md`.
* **Decyzje**: Kluczowe zmiany w architekturze wymagają stworzenia nowego pliku **ADR**.
* **Code Review**: W przypadku pracy na osobnych gałęziach, zmiany są scalane dopiero po weryfikacji przez co najmniej jednego innego członka zespołu.

---

## ⚠️ Komunikacja
* Problemy techniczne zgłaszamy natychmiast na kanale zespołu.
* Raz w tygodniu przeprowadzamy krótką synchronizację statusu zadań.