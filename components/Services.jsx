import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'Ayant une expérience passée en tant que graphiste pour des youtubeurs, je crée des designs modernes et uniques en alliant créativité et ergonomie.'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Développement Web et Mobile',
    description:
      "Développement de sites web et d'applications mobiles en utilisant les dernières technologies comme React, Next.js, React Native et Tailwind CSS."
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Développement Backend',
    description:
      "Développement backend en Typescript avec Node.js ou C# avec ASP.NET Core. " +
        "Création d'API REST. Je suis également familier avec les bases de données postgresql et mongodb."
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Mes services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
