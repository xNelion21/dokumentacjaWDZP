
import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/dokumentacjaWDZP/',
    title: "Karaoke App - Dokumentacja",
    description: "Dokumentacja projektu zaliczeniowego",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Dokumentacja', link: '/index' }
        ],

        sidebar: [
            {
                text: 'Dokumentacja API',
                items: [
                    { text: 'Opis Endpointów API', link: '/API' },
                    { text: 'Przyk³ady API', link: '/api-examples' },
                    { text: 'Funkcjonalnoœci i API', link: '/funkc_srod_api' }
                ]
            },
            {
                text: 'Zasoby projektu',
                items: [
                    { text: 'Strona G³ówna', link: '/index' },
                    { text: 'Backlog prac', link: '/backlog' },
                    { text: 'Estymata prac', link: '/estymata' },
                    { text: 'Wymagania (PRD)', link: '/PRD' },
                    { text: 'Konfiguracja narzêdzi', link: '/konf_narzedzi' },
                    { text: 'Instrukcja uruchomienia', link: '/uruchomienie' },
                    { text: 'Opis œrodowiska', link: '/opisSrodowiska' },
                    { text: 'Przebieg Sprintów', link: '/sprinty' },
                    { text: 'Retrospekcja', link: '/retro1' }
                ]
            },
            {
                text: 'Standardy i Architektura',
                items: [
                    { text: 'Architektura Projektu', link: '/architektura' },
                    { text: 'Zasady wspó³pracy (Contributing)', link: '/contributing' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/collegiumwitelona/2025-inf-wdzpd-lab-all-karaoke-machine' }
        ]
    }
})