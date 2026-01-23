# 🏁 Retrospekcja Końcowa (Podsumowanie Projektu)

**Data Retrospekcji:** 2026-01-20
*Poniższa sekcja stanowi końcowe podsumowanie prac nad projektem Karaoke Machine. Skupiamy się w niej na wnioskach z całego cyklu wytwórczego oraz lekcjach na przyszłość.*

| Roksana Żyłka | Marcin Szuszko | Kamil Ziemiański | Kamil Kubrak | Mikołaj Wołoszyn |
| :--- | :--- | :--- | :--- | :--- |
| **Lider / Backend** | **Backend 2** | **Frontend 2** | **Tester** | **Frontend Dev** |

---

### 👩‍💻 Roksana Żyłka

* **✅ Co poszło dobrze?**
    Utrzymaliśmy wysoką jakość komunikacji do samego końca. Projekt został dowieziony w pełni funkcjonalny, a zespół wykazał się dużą elastycznością przy nagłych zmianach w architekturze.

* **❌ Co poszło źle?**
    Zbyt późna decyzja o sposobie integracji odtwarzacza. Przebudowa logiki bazy danych w ostatniej fazie projektu była stresująca i czasochłonna.

* **🛠️ Co mogło być lepiej?**
    Mogliśmy poświęcić więcej czasu na fazę analizy i prototypowania (PoC) mechanizmu odtwarzania piosenek na samym starcie.

* **🧠 Osobiste odczucia i wnioski:**
    Jestem dumna z zespołu, że mimo technicznych "zakrętów", daliśmy radę. Wniosek: Przy kolejnym projekcie zaczynamy od zamrożenia kluczowych założeń technologicznych, zanim powstanie pierwsza linia kodu.

---

### 🧑‍💻 Mikołaj Wołoszyn

* **✅ Co poszło dobrze?**
    Frontend ostatecznie wygląda profesjonalnie i jest responsywny. Integracja z odtwarzaczem YouTube, mimo że trudna, zakończyła się sukcesem.

* **❌ Co poszło źle?**
    Konieczność zmiany logiki wyświetlania tekstów pod koniec projektu, co wymusiło poprawki w wielu komponentach Vue.

* **🛠️ Co mogło być lepiej?**
    Gdyby plan działania był bardziej szczegółowy od początku, uniknąłbym pisania kodu "do szuflady", który później trzeba było usuwać.

* **🧠 Osobiste odczucia i wnioski:**
    Czuję satysfakcję z efektu końcowego. Wniosek: Dokładny plan na starcie to oszczędność 50% czasu pracy na froncie.

---

### 🧑‍💻 Kamil Kubrak

* **✅ Co poszło dobrze?**
    Proces testowania po zmianie systemu odtwarzania przebiegł sprawnie. Udało się wyłapać błędy synchronizacji napisów przed oddaniem projektu.

* **❌ Co poszło źle?**
    Gwałtowna zmiana logiki pod koniec projektu spowodowała, że część wcześniejszych testów stała się nieaktualna i musiała zostać napisana od nowa.

* **🛠️ Co mogło być lepiej?**
    Ustalenie formatu danych z zewnętrznego systemu odtwarzania na samym początku sprintu 1.

* **🧠 Osobiste odczucia i wnioski:**
    Projekt pokazał, jak ważna jest stabilna specyfikacja. Mój wniosek: Następnym razem wymuszam na zespole "szczegółowy plan działania" już na pierwszym spotkaniu.

---

### 🧑‍💻 Marcin Szuszko

* **✅ Co poszło dobrze?**
    Mimo braków w doświadczeniu, udało mi się sprawnie dostosować model bazy danych do nowych wymagań odtwarzacza. Komunikacja z liderem była kluczowa.

* **❌ Co poszło źle?**
    Straciliśmy sporo czasu na budowanie własnej logiki bazy, którą ostatecznie zastąpił zewnętrzny system.

* **🛠️ Co mogło być lepiej?**
    Wcześniejszy reasearch dostępnych bibliotek i rozwiązań do streamingu piosenek.

* **🧠 Osobiste odczucia i wnioski:**
    Nauka na błędach jest cenna, ale bolesna. Wniosek: Planowanie to nie strata czasu, to inwestycja w spokój pod koniec projektu.

---

### 🧑‍💻 Kamil Ziemiański

* **✅ Co poszło dobrze?**
    Integracja frontend-backend przy nowym systemie odtwarzania zadziałała bezbłędnie. Spójność wizualna została zachowana mimo przebudowy logiki.

* **❌ Co poszło źle?**
    Brak dogadania szczegółów implementacji zewnętrznego API na starcie skutkował podwójną pracą przy niektórych modułach.

* **🛠️ Co mogło być lepiej?**
    Konsultacje techniczne całego zespołu nad "szkieletem" aplikacji powinny trwać dłużej przed rozpoczęciem kodowania.

* **🧠 Osobiste odczucia i wnioski:**
    Komunikacja była super, ale brakowało jej przełożenia na konkretną dokumentację planu. Wniosek: Dobra atmosfera to nie wszystko, potrzebny jest twardy plan działania.

---

## 🏆 Podsumowanie Projektu

Zespół doszedł do wspólnego, kluczowego wniosku: **Komunikacja interpersonalna była wzorowa, ale zawiodło planowanie strategiczne.** Największym wyzwaniem była przebudowa logiki bazy danych w końcowej fazie projektu z powodu późnego wprowadzenia zewnętrznego systemu odtwarzania.

**Główna lekcja na przyszłość:**
Przy kolejnych projektach wprowadzamy zasadę **"Plan first, code second"**. Szczegółowy plan działania i analiza technologiczna wszystkich integracji zewnętrznych muszą zostać ukończone i zaakceptowane przez cały zespół przed przystąpieniem do implementacji. Pozwoli to uniknąć konieczności refaktoryzacji kluczowych modułów w krytycznych fazach projektu.