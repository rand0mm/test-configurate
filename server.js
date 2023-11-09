const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
// Модели или конфигурации опций (замените этим вашими данными)
const optionsData = {
  "config": {
    "size": {
      "caption": "Размер усssтройства",
      "value": "default",
      "callback": "fontSize",
      "options": {
        "default":"По умолчанию",
        "large": "Увеличенный"
      }
    },
    "drinks": {
      "caption": "Кол-во напитков",
      "value": "6",
      "options": {
        "6": "6",
        "8": "8",
        "12": "12"
      }
    },
    "tops": {
      "caption": "Кол-во добавок",
      "value": "1",
      "options": {
        "1": "1",
        "2": "2",
        "3": "3"
      }
    },
    "background": {
      "caption": "Цвет фона",
      "value": "#F5F9FF",
      "options": {
        "#F5F9FF": "По умолчанию",
        "#fff5f5": "Красный",
        "#ebebeb": "Серый"
      }
    }
  },
  "products": [
    {
      "id": "1",
      "content": "Товар номер 1",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "2",
      "content": "Товар номер 2",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "3",
      "content": "Товар номер 3",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "4",
      "content": "Товар номер 4",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "5",
      "content": "Товар номер 5",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "6",
      "content": "Товар номер 6",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "7",
      "content": "Товар номер 7",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "8",
      "content": "Товар номер 8",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "9",
      "content": "Товар номер 9",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "10",
      "content": "Товар номер 10",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "11",
      "content": "Товар номер 11",
      "cost": "10",
      "count": "0"
    },
    {
      "id": "12",
      "content": "Товар номер 12",
      "cost": "10",
      "count": "0"
    }
  ]
}

// Маршрут API для получения данных опций
app.get('/api/options', (req, res) => {
  res.json(optionsData);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
