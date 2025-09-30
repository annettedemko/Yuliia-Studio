-- Очищаем существующие данные
TRUNCATE auth.users CASCADE;
TRUNCATE public.prices CASCADE;
TRUNCATE public.subscriptions CASCADE;
TRUNCATE public.events CASCADE;

-- Загружаем пользователей в auth.users
INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone_confirmed_at, is_sso_user, deleted_at, is_anonymous) VALUES
('00000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'authenticated', 'authenticated', 'anna@beauty.com', '$2b$10$WryQfCPKCHDi0Je0H.iqFePYcI.AE7OzfUgGA10wLkD8dPx2I31L6', '2025-09-29 13:00:00.000000+00', '{"provider": "email", "providers": ["email"]}', '{"role": "anna", "full_name": "Anna", "email_verified": true}', false, '2025-09-29 13:00:00.000000+00', '2025-09-29 13:00:00.000000+00', null, false, null, false),
('00000000-0000-0000-0000-000000000002', '22222222-2222-2222-2222-222222222222', 'authenticated', 'authenticated', 'natalia@beauty.com', '$2b$10$31ToJoquKMiNrrt4w0Lmr.OIvcABJ5SQ3IkpmLX8uocjSZbAJoLni', '2025-09-29 13:00:00.000000+00', '{"provider": "email", "providers": ["email"]}', '{"role": "natalia", "full_name": "Natalia", "email_verified": true}', false, '2025-09-29 13:00:00.000000+00', '2025-09-29 13:00:00.000000+00', null, false, null, false),
('00000000-0000-0000-0000-000000000003', '33333333-3333-3333-3333-333333333333', 'authenticated', 'authenticated', 'admin@beauty.com', '$2b$10$tBL5bjsWBBj6NWxOTWbTBuHXHJKFMVbTEnbNPYzf1HUsfu9S4T7ra', '2025-09-29 13:00:00.000000+00', '{"provider": "email", "providers": ["email"]}', '{"role": "admin", "full_name": "Administrator", "email_verified": true}', false, '2025-09-29 13:00:00.000000+00', '2025-09-29 13:00:00.000000+00', null, false, null, false);

-- Загружаем цены
INSERT INTO public.prices (id, service, price, category, note, order_index, is_published, created_at, updated_at) VALUES
('a8e10e58-e665-4621-a3f1-bc24166ea4ac', 'Oberlippe', '35€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('c98d65f2-2385-469a-87b0-50722c4966c6', 'Kinn', '35€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('e039fee2-9533-40d9-abb3-33623583c7a1', 'Bauchstreifen', '35€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('07b14ea1-3b48-474c-abb6-08ae7379772e', 'Finger', '35€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('2ec23228-0f4a-4b45-8882-56c9adb967f3', 'Wangen', '35€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('2e0283b7-6033-4d75-9c55-42fc9ed25428', 'Nacken komplett', '60€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('70f2f236-e245-4e6a-9d8b-906d890c3ae2', 'Achselhöhlen', '60€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('fe701758-806d-4269-b61c-42829e7cbb7d', 'Unterer Rücken', '70€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00'),
('32b685e6-94cb-4515-8cc9-f4a0ffb0d03f', 'Bikini Komplett', '120€', 'alexandrit', null, 0, true, '2025-09-25 23:50:22.751331+00', '2025-09-25 23:50:22.751331+00');

-- Загружаем подписки
INSERT INTO public.subscriptions (id, name, price, period, treatments, frequency, features, popular, order_index, is_published, created_at, updated_at) VALUES
('4d12750f-fcf1-427c-865c-9a93d73d7953', 'Silber', '300€', 'pro Monat', '72 Behandlungen', '2x pro Woche', '{"Icoone Laser Body Contouring","Persönliche Beratung","Flexible Terminplanung"}', false, 0, true, '2025-09-25 23:56:42.977424+00', '2025-09-25 23:56:42.977424+00'),
('4cae7f36-0a29-46d2-a62b-4fbf738ef750', 'Gold', '400€', 'pro Monat', '106 Behandlungen', '3x pro Woche', '{"Icoone Laser Body Contouring","Persönliche Beratung","Flexible Terminplanung","Hautanalyse inklusive","Prioritäre Terminvergabe"}', true, 0, true, '2025-09-25 23:56:42.977424+00', '2025-09-25 23:56:42.977424+00'),
('6ca00e80-955b-495a-89cf-3dbdf656070f', 'Platin', '500€', 'pro Monat', '150 Behandlungen', '4x pro Woche', '{"Icoone Laser Body Contouring","Persönliche Beratung","Flexible Terminplanung","Hautanalyse inklusive","Prioritäre Terminvergabe","Kostenlose Zusatzbehandlungen","Exklusive VIP-Betreuung"}', false, 0, true, '2025-09-25 23:56:42.977424+00', '2025-09-25 23:56:42.977424+00');

-- Загружаем события
INSERT INTO public.events (id, title, date, time, location, address, description, is_published, created_at, updated_at, user_id) VALUES
('a01e848b-5b5d-43ce-a932-22ae85f8da13', 'DEKA Beauty Day', '2025-10-05', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen', true, '2025-09-25 23:56:15.377261+00', '2025-09-25 23:56:15.377261+00', null),
('3262cb2d-491f-4e05-846d-bbfe280df742', 'BEAUTY FORUM Festival 2025', '2025-10-18', '10:00–17:00', 'Messe München', 'Am Messesee 2, 81829 München', 'Besuchen Sie den DEKA-Stand – innovative Lösungen für Haarentfernung, Hautverjüngung und Körperformung: Motus AX, Again COS, Motus PRO, PHYSIQ 360 und RedTouch PRO', true, '2025-09-25 23:56:15.377261+00', '2025-09-25 23:56:15.377261+00', null),
('f31f9122-5b3a-4805-80ef-291858807ed2', 'DEKA Beauty Day', '2025-11-09', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen', true, '2025-09-25 23:56:15.377261+00', '2025-09-25 23:56:15.377261+00', null),
('12061488-6d96-4d72-b591-6ca7e18437c4', 'DEKA Beauty Day', '2025-12-17', '18:00', 'Yuliia Cheporska Studio', 'Elsässer Straße 33, 81667 München', 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen', true, '2025-09-25 23:56:15.377261+00', '2025-09-25 23:56:15.377261+00', null);