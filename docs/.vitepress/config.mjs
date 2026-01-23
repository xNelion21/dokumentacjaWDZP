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
                text: 'Wstęp',
                items: [
                    { text: 'O projekcie', link: '/index' },
                    { text: 'Instrukcja uruchomienia', link: '/uruchomienie' },
                    { text: 'Skład zespołu', link: '/GROUP' }
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
                    { text: 'Opis środowiska', link: '/opisSrodowiska' },
                    { text: 'Konfiguracja narzędzi', link: '/konf_narzedzi' }
                ]
            },

            {
                text: 'Decyzje Architektoniczne (ADR)',
                items: [
                    { text: 'ADR 1: Stos technologiczny', link: '/adr1' },
                    { text: 'ADR 2: Zarządzanie tekstem (Lyrics)', link: '/adr2' },
                    { text: 'ADR 3: Integracja z YouTube API', link: '/adr3' },
                    { text: 'ADR 4: Hosting bazy danych (Aiven)', link: '/adr4'},
                    { text: 'ADR 5: System moderacji - Sugestie', link: '/adr5' },
                    { text: 'ADR 6: Obsługa błędów API', link: '/adr6' }
                ]
            },
            {
                text: 'Przebieg Projektu',
                items: [
                    { text: 'Przebieg Sprintów', link: '/sprinty' },
                    { text: 'Retrospekcja - połowa projektu', link: '/retro1' },
                    { text: 'Retrospekcja - Końcowa', link: '/retro2' },
                    { text: 'Zasady współpracy', link: '/contributing' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/collegiumwitelona/2025-inf-wdzpd-lab-all-karaoke-machine' }
        ]
    }
})