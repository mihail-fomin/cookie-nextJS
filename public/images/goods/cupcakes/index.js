import media1 from "./cupcake_1.jpg";
import media2 from "./cupcake_2.jpg";
import media3 from "./cupcake_3.jpg";
import media4 from "./cupcake_4.jpg";

export const media = [media1, media2, media3, media4];
export const mediaByIndex = index => media[index % media.length];
