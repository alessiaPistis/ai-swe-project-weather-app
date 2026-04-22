# 🌤 Meteo App Angular

![Angular](https://img.shields.io/badge/Angular-17-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-purple?logo=reactivex)
![Status](https://img.shields.io/badge/status-completed-brightgreen)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 📌 Panoramica

Applicazione web sviluppata in Angular che consente di cercare il meteo di una città inserendo il nome nel campo di input.

L’app utilizza API esterne per:

* convertire il nome della città in coordinate geografiche (geocoding)
* recuperare il meteo attuale
* ottenere le previsioni per i successivi 5 giorni

I dati vengono trasformati e visualizzati in un’interfaccia moderna con layout a card.

---

## ⚙️ Funzionalità

* 🔍 Ricerca meteo per città
* 🌡 Temperatura attuale
* 💨 Velocità del vento
* 🌤 Descrizione meteo
* 📅 Previsioni a 5 giorni
* 🎨 Layout a card
* ⚠️ Gestione errori:

  * città non trovata
  * input vuoto
  * errori API/rete

---

## 🛠 Tecnologie

* Angular
* TypeScript
* RxJS
* HTML / CSS
* Open-Meteo API

---

## 📥 Installazione

Clona il progetto:

	git clone https://github.com/tuo-username/weather-app.git
	cd weather-app


Installa le dipendenze:

	npm install

Avvia il server:

	ng serve

Apri il browser:

	http://localhost:4200

---

## ▶️ Utilizzo

1. Inserisci il nome di una città
2. Clicca su Cerca
3. Visualizza:

   * meteo attuale
   * previsioni per 5 giorni

---

## 🧪 Test

| Test               | Input     | Risultato atteso |
| ------------------ | --------- | ---------------- |
| ✔ Città valida     | Milano    | Meteo + forecast |
| ✔ Città non valida | asdasdasd | Messaggio errore |
| ✔ Input vuoto      | ""        | Avviso utente    |
| ✔ Offline          | -         | Errore rete      |

---

## 📊 Output di esempio

**Input:**

Milano

**Output:**

Temperatura: 22 °C
Vento: 10 km/h
Clima: Sereno

Previsioni:
Lunedì → 24°C / 15°C ☀️
Martedì → 21°C / 14°C ⛅

---

## 🧠 Architettura

* Service → chiamate API e logica
* Component → gestione UI
* Models → tipizzazione dati

✔ separazione tra:

* API response
* UI model

---

## 🚀 Miglioramenti futuri

* 📱 Responsive design avanzato
* 🎨 UI con Angular Material
* 🌍 Multi-città
* ⏳ Loader durante le chiamate API
* 📊 Grafici meteo
* 💾 Caching dati
* 🌐 Multi-lingua

---

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT.

---

## 👩‍💻 Autore

Progetto sviluppato come esercizio Angular con integrazione API e utilizzo di strumenti di sviluppo assistiti da IA.
