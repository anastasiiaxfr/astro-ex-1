const nav = [
    {
        title: 'Услуги',
        url: '/services',
        child: [
            {
                title: 'Репутационный менеджмент',
                url: '/services/reputation-management',
                child: [
                    { title: ' ASO ', url: '/services/aso' },
                    { title: ' GMB оптимизация ', url: '/services/gmb-optimization' },
                    { title: ' ORM ', url: '/services/orm' },
                    {
                        title: ' Обучение репутационному менеджменту ',
                        url: '/services/reputation-marketing'
                    },
                    { title: ' Публикация отзывов ', url: '/services/reviews' },
                    { title: ' Построение SERM-отдела ', url: '/services/serm-department' },
                    { title: '  SERM ', url: '/services/serm' }
                ]
            },
            {
                title: 'Разработка', url: '/services/development',
                child: [
                    { title: ' Автоматизация RPA ', url: '/services/automatization-rpa' },
                    { title: '  Разработка ревью-сайтов  ', url: '/services/site-dev' },
                    { title: '  UX дизайн  ', url: '/services/ux' },
                ]
            },
            {
                title: 'Бренд менеджмент', url: '/services/brend-management',
                child: [
                    { title: '  Комьюнити менеджмент  ', url: '/services/comunity-menegment' },
                    { title: '  Удаление негатива  ', url: '/services/delete-negotiv' },
                    { title: '  Инфлюенс маркетинг  ', url: '/services/influence-merketing#' },
                    { title: '  Финансовый PR  ', url: '/services/pr' },
                    { title: '   Продвижение в Youtube ', url: '/services/youtube' }
                ]
            },
            {
                title: 'Привлечение клиентов', url: '/services/bust-clients',
                child: [
                    { title: '  Лидогенерация  ', url: '/services/leadgeneration' },
                    { title: '  Линкбилдинг  ', url: '/services/linkbilding' },
                    { title: '  PBN  ', url: '/services/pbn' },
                    {
                        title: '  SEO для FinTech  ',
                        url: '/services/seo'
                    },
                ]
            }
        ]
    },
    {
        title: 'Кейсы', url: '/cases',
    },
    { title: 'О нас', url: '/about' },
    { title: 'Наша команда', url: '/team' },
    { title: 'Карьера', url: '/job' },
    { title: 'Контакты', url: '/contacts' },
    { title: 'Блог', url: '/blog' }
];

export { nav };
