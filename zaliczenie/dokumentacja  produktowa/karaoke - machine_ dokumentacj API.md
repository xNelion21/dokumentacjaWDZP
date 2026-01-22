\# 🔐 Dokumentacja API \- Karaoke App Authentication

Dokumentacja modułu autoryzacji dla backendu aplikacji Karaoke. Wszystkie endpointy wymagające autoryzacji oczekują nagłówka:  
\`Authorization: Bearer \<token\_jwt\>\`

\---

\#\# 🚀 Endpointy Publiczne (Auth)

\#\#\# 1\. Rejestracja standardowa  
Tworzy nowe konto użytkownika.  
\* \*\*URL:\*\* \`POST /api/auth/register\`  
\* \*\*Body:\*\*  
\`\`\`json  
{  
  "username": "User123",  
  "email": "user@example.com",  
  "password": "strongPassword123"  
}

* **Sukces:** `201 Created`

### **2\. Logowanie standardowe**

Wymiana loginu i hasła na token JWT.

* **URL:** `POST /api/auth/login`  
* **Body:**

JSON  
{  
  "username": "User123",  
  "password": "strongPassword123"  
}

* **Sukces:** `200 OK` \+ `{"token": "JWT_TOKEN"}`

### **3\. Logowanie/Rejestracja Facebook**

Endpoint typu "Login or Register". Jeśli użytkownik nie istnieje, zostaje automatycznie stworzony.

* **URL:** `POST /api/auth/facebook`  
* **Body:**

JSON  
{  
  "facebookId": "123456789",  
  "email": "marcin@example.com",  
  "name": "Marcin Test",  
  "pictureUrl": "\[https://url-do-zdjecia.com\](https://url-do-zdjecia.com)"  
}

* **Sukces:** `200 OK` \+ `{"token": "JWT_TOKEN"}`

---

## **👤 Endpointy Chronione**

### **4\. Profil użytkownika (Me)**

Zwraca dane aktualnie zalogowanego użytkownika na podstawie tokena.

* **URL:** `GET /api/users/me`  
* **Nagłówek:** `Authorization: Bearer <token>`  
* **Odpowiedź:**

JSON  
{  
  "id": 1,  
  "username": "Marcin Test",  
  "email": "marcin@example.com",  
  "role": "ROLE\_USER",  
  "locked": false  
}

### **5\. Zarządzanie rolami (Tylko Admin)**

* **URL:** `PATCH /api/admin/users/{userId}/role?role=ADMIN`  
* **Uprawnienia:** `ROLE_ADMIN`

---

## **🛠️ Informacje techniczne dla Frontendu**

* **Prefix ról:** `ROLE_USER`, `ROLE_ADMIN`.  
* **Status `locked`:** Jeśli `true`, użytkownik ma ograniczone prawa w aplikacji.  
* **Błędy 401:** Oznaczają brak lub wygaśnięcie tokena \- należy przekierować do logowania.

