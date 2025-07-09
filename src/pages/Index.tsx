import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Керамическая чаша ручной работы",
      price: "2,500 ₽",
      image: "/img/33bf4c28-99da-48e0-b338-8c6a88e7a1a2.jpg",
      seller: "Мастерская Глины",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      name: "Вязаный шарф из натуральной шерсти",
      price: "1,800 ₽",
      image: "/img/f4e7337b-afb7-4208-969a-36e422701d11.jpg",
      seller: "Уютные Нити",
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      name: "Деревянная разделочная доска",
      price: "3,200 ₽",
      image: "/img/545bd178-d372-4ed0-b4ff-9fd82ba6905e.jpg",
      seller: "Столярная Мастерская",
      rating: 4.7,
      reviews: 31,
    },
  ];

  const categories = [
    { name: "Керамика", icon: "Palette", count: 45 },
    { name: "Текстиль", icon: "Scissors", count: 38 },
    { name: "Дерево", icon: "TreePine", count: 29 },
    { name: "Украшения", icon: "Gem", count: 52 },
    { name: "Кулинария", icon: "ChefHat", count: 23 },
    { name: "Мыло", icon: "Sparkles", count: 16 },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-primary" size={32} />
              <h1 className="text-2xl font-playfair font-bold text-primary">
                Домашний Маркет
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 text-muted-foreground"
                  size={20}
                />
                <Input
                  placeholder="Поиск товаров..."
                  className="pl-10 bg-white border-primary/20 focus:border-primary rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <Icon name="ShoppingCart" size={24} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-5 h-5 rounded-full text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-playfair font-bold text-primary mb-6">
            Уникальные товары от мастеров
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-source">
            Откройте для себя удивительный мир рукоделия и поддержите
            самозанятых мастеров
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              Начать покупки
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full"
            >
              Стать продавцом
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-playfair font-bold text-center mb-8 text-primary">
            Популярные категории
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-primary/20 hover:border-primary/40 bg-white/80"
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={category.icon}
                    className="mx-auto mb-3 text-primary"
                    size={32}
                  />
                  <h4 className="font-source font-semibold text-primary mb-1">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
            Рекомендуемые товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow border-primary/20 hover:border-primary/40 bg-white/90"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        className="text-yellow-500 fill-yellow-500"
                        size={16}
                      />
                      <span className="text-sm font-source">
                        {product.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                  <h4 className="font-source font-semibold text-primary mb-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {product.seller.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {product.seller}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-playfair font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              Поддержка и помощь
            </h3>
            <p className="text-lg text-muted-foreground font-source">
              Мы всегда готовы помочь вам и нашим мастерам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/80 border-primary/20">
              <CardContent className="p-6">
                <Icon
                  name="MessageCircle"
                  className="mx-auto mb-4 text-primary"
                  size={48}
                />
                <h4 className="font-source font-semibold text-primary mb-2">
                  Чат с поддержкой
                </h4>
                <p className="text-muted-foreground mb-4">
                  Онлайн-поддержка 24/7
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/80 border-primary/20">
              <CardContent className="p-6">
                <Icon
                  name="Users"
                  className="mx-auto mb-4 text-primary"
                  size={48}
                />
                <h4 className="font-source font-semibold text-primary mb-2">
                  Сообщество
                </h4>
                <p className="text-muted-foreground mb-4">
                  Общайтесь с другими мастерами
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center bg-white/80 border-primary/20">
              <CardContent className="p-6">
                <Icon
                  name="BookOpen"
                  className="mx-auto mb-4 text-primary"
                  size={48}
                />
                <h4 className="font-source font-semibold text-primary mb-2">
                  База знаний
                </h4>
                <p className="text-muted-foreground mb-4">
                  Статьи и руководства
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Изучить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} />
                <h4 className="font-playfair font-bold text-lg">
                  Домашний Маркет
                </h4>
              </div>
              <p className="text-primary-foreground/80 font-source">
                Платформа для самозанятых мастеров, где каждый товар создан с
                любовью и заботой.
              </p>
            </div>
            <div>
              <h5 className="font-source font-semibold mb-3">Покупателям</h5>
              <ul className="space-y-2 text-primary-foreground/80 font-source">
                <li>Как покупать</li>
                <li>Оплата и доставка</li>
                <li>Возврат товаров</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h5 className="font-source font-semibold mb-3">Продавцам</h5>
              <ul className="space-y-2 text-primary-foreground/80 font-source">
                <li>Регистрация</li>
                <li>Создание магазина</li>
                <li>Управление заказами</li>
                <li>Аналитика продаж</li>
              </ul>
            </div>
            <div>
              <h5 className="font-source font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-primary-foreground/80 font-source">
                <li>Центр помощи</li>
                <li>Связаться с нами</li>
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80 font-source">
              © 2024 Домашний Маркет. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
