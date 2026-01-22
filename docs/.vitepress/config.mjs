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
                text: 'Wstêp',
                items: [
                    { text: 'O projekcie', link: '/index' },
                    { text: 'Instrukcja uruchomienia', link: '/uruchomienie' },
                    { text: 'Sk³ad zespo³u', link: '/GROUP' }
                ]
            },
            {
                text: 'Dokumentacja Produktowa',
                items: [
                    { text: 'Wymagania (PRD)', link: '/PRD' },
                    { text: 'Relacje bazy danych', link: '/relacje' },
                    { text: 'Backlog prac', link: '/backlog' },
                    { text: 'Estymata prac', link: '/estymata' },
                    { text: 'Historie Uzytkowania', link: 'historyjki' },
                      { text: 'Persony', link: 'persony' }

                ]
            },
            {
                text: 'Dokumentacja Projektowa',
                items: [
                    { text: 'Dokumentacja API', link: '/API' },
                    { text: 'Architektura Projektu', link: '/architektura' },
                    { text: 'Opis œrodowiska', link: '/opisSrodowiska' },
                    { text: 'Konfiguracja narzêdzi', link: '/konf_narzedzi' }
                ]
            },
            {
                text: 'Przebieg Projektu & Agile',
                items: [
                    { text: 'Przebieg Sprintów', link: '/sprinty' },
                    { text: 'Retrospekcja', link: '/retro1' },
                    { text: 'Zasady wspó³pracy', link: '/contributing' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/collegiumwitelona/2025-inf-wdzpd-lab-all-karaoke-machine' }
        ]
    }
})