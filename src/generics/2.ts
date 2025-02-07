type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

export function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const obj1 = { name: "Box", color: "Red" };
const obj2 = { position: 2, weight: 10 };

const result = compare(obj1, obj2);
console.log(result);
