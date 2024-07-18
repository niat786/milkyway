import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
// import Head from "next/head";
export const runtime = "edge";
const privacy = () => {
    
  return (
    <>
 {/* <Head>
        <title>Milkyway casino | Play online and download for Android or IOS</title>
        <meta name="description" content="Description of your home page." />
        <meta property="og:title" content="Home Page - Your Site Name" />
        <meta property="og:description" content="Description of your home page." />
        <meta property="og:image" content="/og-cover.png" />
        <meta property="og:url" content="https://example.com" />
      </Head> */}

      <Header></Header>
      <section className=" mx-auto lg:max-w-[96rem] p-2 md:px-4 lg:px-20 ">
        <div
          id="privacy policy"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10"
        >
          <h1 className="text-2xl md:text-3xl my-5">Privacy Policy</h1>

          <p>
            Welcome to Milky Way Online! We value your privacy and want you to
            feel secure when using our software and website. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>

          <p className=" tracking-wide">
            Read the disclaimer&nbsp;
            <a href="/disclaimer" className="text-blue-500">
              here
            </a>
            .
          </p>

          <h2 className="h2">Information We Collect</h2>

          <p>
            We do not collect any personal information from you when you use our
            software or website. However, please note:
          </p>
          <ul>
            <li>
              Third-party services such as advertisements may use cookies and
              collect information about your interactions with them.
            </li>
          </ul>

          <h2 className="h2">Automatic Data Collection</h2>

          <p>Our software/website may automatically collect:</p>
          <ul>
            <li>
              Device type, IP address, and operating system for technical
              purposes.
            </li>
            <li>
              Location data (with your permission) to enhance your experience,
              but we won&apos;t share this with others.
            </li>
          </ul>

          <h2 className="h2">Sharing Your Information</h2>

          <p>
            We do not collect significant or sensitive information about you,
            therefore we do not share your data.
          </p>

          <h2 className="h2">Your Rights</h2>

          <p>Under data protection laws, you have the right to:</p>
          <ul>
            <li>Access your personal data and understand how we use it.</li>
            <li>Correct any inaccuracies in your information.</li>
            <li>Request deletion of your data under certain conditions.</li>
            <li>Limit how we use your data.</li>
          </ul>

          <h2 className="h2">Security and Retention</h2>

          <p>
            We prioritize the security of your information and retain it only as
            long as necessary for our services. While we take precautions, no
            system is completely secure.
          </p>

          <h2 className="h2">Cookies and Similar Technologies</h2>

          <p>
            We use cookies to enhance your experience on our website. You can
            manage cookies through your browser settings.
          </p>

          <h2 className="h2">Updates to This Policy</h2>

          <p>
            We may update this Privacy Policy, and any changes will be posted
            here. Continued use of our services after changes indicates your
            acceptance.
          </p>

          <h2 className="h2">Agreement and Disputes</h2>

          <p>
            By using our services, you agree to this Privacy Policy and any
            related agreements. Any disputes will be governed by US laws.
          </p>

        
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default privacy;
