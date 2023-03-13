import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../public/images/profile.avif';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Consultant Website</title>
        <meta name="description" content="CHANGE ME TO SOMETHING DYNAMIC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="border-4 min-h-64 grid grid-cols-1 md:grid-cols-2">
          <div className="px-4">
            <h1 className="font-bold text-xl my-4">
              This is a cool headline about me
            </h1>
            <p className="font-serif text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem odit illum laboriosam tempore cumque aut molestiae
              corrupti quae, quis enim tenetur incidunt at dolorum dignissimos!
              Tenetur dolores non quis nobis.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 overflow-hidden rounded-[50%]">
              <Image
                className="w-full scale-x-[-1]"
                alt="profile image"
                height={200}
                width={200}
                src={profileImage}
              ></Image>
            </div>
          </div>
        </section>
        <section className="border-4 h-64">Services</section>
        <section className="border-4 h-64">Contact Form</section>
        <section className="border-4 h-64">Recent Posts</section>
      </main>
    </>
  );
}
