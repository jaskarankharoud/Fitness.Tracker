import { Meal, Day } from "./WeeklyMealComponent";

export default function VegMealPlan() {
  return (
    <div>
      <Day name="Monday">
        <Meal
          breakfast="Oatmeal with fruit, nut butter, flaxseed, and a glass of soy milk."
          lunch="Grilled veggie and hummus wrap on a whole-grain tortillar with lentil salad."
          dinner="Tofu banh mi sandwich with pickled slaw."
        />
      </Day>
      <Day name="Tuesday">
        <Meal
          breakfast="Scarmbled eggs with tomatoes, garlic, and mushrooms."
          lunch="Zucchini boats stffed with spiced lentils, veggies, and feta with a side of tomato."
          dinner="Chickpea curry with basmati rice."
        />
      </Day>
      <Day name="Wendesday">
        <Meal
          breakfast="Greek yogurt with chia seeds and berries."
          lunch="Farro salad with tomatoes, cucumber, and feta with spiced lentil soup."
          dinner="Eggplant parmesan and grilled seitan with a side salad."
        />
      </Day>
      <Day name="Thursday">
        <Meal
          breakfast="Tofu scramble with sauteed peppers, onions, and spinach."
          lunch="Burrito bowl with brown rice, beans, avocado, salsa, and veggies."
          dinner="Vegetable paella with baked tempeh a side salad."
        />
      </Day>
      <Day name="Friday">
        <Meal
          breakfast="Whole-wheat toast topped with avocado, chickpeas, and nutritional yeast."
          lunch="Marinated tofu pita pocket with Greek salad."
          dinner="Quinoa-black-bean meatballs with zucchini noodles."
        />
      </Day>
      <Day name="Saturday">
        <Meal
          breakfast="Smoothie of kale, berries, bananas, nut butter, almond milk, and a scoop of plant-based protein powder."
          lunch="Black bean veggie burger on a whole grain bun with avocado salad."
          dinner="Whole-grain flatbread with spiced lentils, grilled garden vegetables, and pesto."
        />
      </Day>
      <Day name="Sunday">
        <Meal
          breakfast="Kale and sweet potato hash."
          lunch="Bell peppers stuffed with tempeh with zucchini fritters."
          dinner="Black bean tacos with cauliflower rice."
        />
      </Day>
    </div>
  );
}
