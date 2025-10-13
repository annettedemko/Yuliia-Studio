-- Fill Russian translations for price categories
UPDATE public.price_categories
SET
    name_ru = 'Александритовый лазер Motus AX',
    description_ru = 'Профессиональная лазерная эпиляция александритовым лазером'
WHERE code = 'alexandrit';

UPDATE public.price_categories
SET
    name_ru = 'M-Tech диодный лазер',
    description_ru = 'Современнейшая технология диодного лазера'
WHERE code = 'dioden';

UPDATE public.price_categories
SET
    name_ru = 'Icoone лазер',
    description_ru = 'Коррекция фигуры и подтяжка кожи'
WHERE code = 'icoone';

UPDATE public.price_categories
SET
    name_ru = 'RedTouchPro',
    description_ru = 'Инновационные процедуры RedTouchPro для подтяжки кожи'
WHERE code = 'redtouchpro';

UPDATE public.price_categories
SET
    name_ru = 'Маникюр',
    description_ru = 'Профессиональные процедуры маникюра'
WHERE code = 'manicure';

UPDATE public.price_categories
SET
    name_ru = 'Педикюр',
    description_ru = 'Профессиональные процедуры педикюра'
WHERE code = 'pedicure';
