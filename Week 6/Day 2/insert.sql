insert into links(url, name)
values('https://ebay.com',' Ebay online store')
returning id,url

insert into country(country)
values 
('India1'),
('Maharashtra'),
('Koliwada')
returning country_id, country


-- ADD A COLUMN

ALTER TABLE country
ADD region_id SMALLINT;