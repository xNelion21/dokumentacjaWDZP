# **`Product Requirements Document (PRD):`** 

Niniejszy dokument opisuje kluczowe wymagania funkcjonalne dla aplikacji **Karaoke Machine** (Singly), która ma służyć do wyszukiwania, odtwarzania piosenek oraz zarządzania ich tekstami i znacznikami czasowymi.


### Legenda oznaczeń wymagań

| Kod | Rozwinięcie | Opis |
|:--- |:--- |:--- |
| **AUTH** | Authentication | Wymagania dotyczące logowania, rejestracji i uprawnień użytkowników. |
| **MGT** | Management | Wymagania dotyczące zarządzania treścią, piosenkami i administracji systemem. |

1. `wprowadzenie`

| Metryka | Wartość |
| :---- | :---- |
| **Nazwa Projektu** | Karaoke Machine (Singly) |
| **Cel** | Umożliwienie użytkownikom odtwarzania piosenek z synchronizacją tekstu (karaoke) oraz zarządzanie bazą danych przez administratorów i społeczność. |
| **Status** | Implementacja backendu ukończona w 90% (Security, CRUD, Wyszukiwanie, Zarządzanie Użytkownikiem). |

2. `persony`   
   

| Persona | Rola | Potrzeba |
| :---- | :---- | :---- |
| **Użytkownik (User)** | Konsument, Autor Propozycji | Chce znaleźć dowolną piosenkę, odtworzyć ją z tekstem i zgłosić poprawkę. |
| **Administrator (Admin)** | Zarządca, Kurator Danych | Musi zarządzać użytkownikami (blokowanie), kategoriami, autorami oraz weryfikować propozycje zmian tekstu. |

   

   

   

3. `wymagania funkcjonalne`   
   

| ID | Wymagania |
| :---- | :---- |
| **U.AUTH.1** | Użytkownik musi mieć możliwość **rejestracji** w systemie za pomocą adresu e-mail i hasła. |
| **U.AUTH.2** | Użytkownik musi mieć możliwość **logowania** w systemie za pomocą adresu e-mail/nazwy użytkownika i hasła. |
| **U.AUTH.3** | System musi wspierać logowanie przez platformę **Facebook** (OAuth). |
| **U.AUTH.4** | System musi chronić endpointy API za pomocą **tokenów JWT** i **różnicować dostęp** (USER vs ADMIN). |
| **U.MGT.1** | Użytkownik musi mieć możliwość **wyszukiwania piosenek** po Tytule, Autorze, Kategorii.  |
| **U.MGT.2** | Użytkownik musi mieć możliwość dodawania piosenek do **Ulubionych** |
| **U.MGT.3** | Użytkownik musi mieć możliwość **wysyłania propozycji zmian tekstu.**  |
| **A.MGT.1** | Administrator musi mieć możliwość **zarządzania użytkownikami:** Dodawanie, Usuwanie, Blokowanie i Odblokowywanie |
| **A.MGT.2** | Administrator musi mieć możliwość **zarządzania propozycjami zmiany tekstu**: odrzucanie i zatwierdzanie. |

   
