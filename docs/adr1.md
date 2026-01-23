## ADR 1: Wybór stosu technologicznego i przydział ról

**Data:** 2025-10-18  
**Status:** Zaakceptowane  

### Kontekst
Musieliśmy wybrać technologie umożliwiające szybkie wytwarzanie oprogramowania (MVP) przy jednoczesnym zachowaniu skalowalności i łatwości wdrożenia.

### Decyzja
1. **Backend:** Spring Boot (Java) – ze względu na wbudowane wsparcie dla REST API, bezpieczeństwa (Spring Security) i łatwą integrację z bazami relacyjnymi.
2. **Frontend:** Vue.js 3 (Vite) – zapewniający wysoką wydajność (SPA) i łatwość tworzenia reaktywnego interfejsu.
3. **Role w zespole:**
    * **Backend & DevOps:** Zarządzanie API, bazą danych PostgreSQL (Aiven) i automatyzacją GitHub Actions.
    * **Frontend & UX:** Budowa interfejsu, obsługa odtwarzacza i komunikacja z API.

### Konsekwencje
* Rozdzielenie warstw pozwala na niezależną pracę nad frontem i backem.
* Konieczność obsługi CORS w Spring Boot, aby umożliwić komunikację z frontendem.