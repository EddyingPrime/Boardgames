import List1 from '../assets/list1.jpg'
import List2 from '../assets/list2.jpg'
import List3 from '../assets/list3.jpg'
import List4 from '../assets/list4.jpg'
import List5 from '../assets/list5.jpg'
import List6 from '../assets/list6.jpg'

const Dice = () => {
  // Sample data for recommended cafes
  const imageList = [
        {image: List2},
        {image: List3},
        {image: List4},
        {image: List5},
        {image: List6},
  ];

  return (
    <div className="w-30 p-4">
    <div className="mb-8 flex items-center">

<div className="relative w-[300px] h-[300px] ml-[20%] shadow-sm rounded overflow-hidden">
<img
src={List1}
alt="Sample"
className="w-full h-full object-cover"
/>
</div>

{/* Text content */}
<div className="ml-8">
<div className="bg-gray bg-opacity-60 rounded-sm p-2 text-black text-4xl font-bold">
The dice never lie;
</div>
<div className="bg-gray bg-opacity-60 rounded-sm mb-4 p-2 text-black text-4xl font-bold">
they're a reflection of life's randomness.
</div>
{/* <div className="flex flex-wrap gap-4">
{imageList.map((image) => (
  <div key={image.id} className="w-[150px] h-[100px] border relative shadow-sm rounded overflow-hidden">
    <img
      src={image.image}
      alt={image.name}
      className="w-full h-full object-cover"
    />
  </div>
))}
</div> */}
</div>
</div>
</div>
  );
};

export default Dice;
