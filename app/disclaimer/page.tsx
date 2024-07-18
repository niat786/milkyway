import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
export const runtime = "edge";
const disclaimer = () => {
  return (
    <>
      <Header></Header>

      <section className=" mx-auto lg:max-w-[96rem] p-2 md:px-4 lg:px-20 ">
        <div
          id="disclaimer"
          className="md:p-8 lg:p-10  p-4 border border-dashed rounded-xl my-10"
        >
          <h1 className="text-2xl md:text-3xl my-5">Disclaimer</h1>

          <ul>
            <li>
              <strong>
                We are not developers of the Milky Way Casino app:
              </strong><br/>
              We do not create or maintain the Milky Way Casino app. We are an
              informational platform that provides details about the app and
              facilitates its download.
            </li>
            <li>
              <strong>
                We do not collect any personal information from users:
              </strong><br/>
              We do not gather or store any personal data from individuals
              visiting our website or using our services.
            </li>
            <li>
              <strong>We do not collect money in any form:</strong> We do not
              handle payments of any kind, including currency, online payments,
              or cryptocurrencies. We solely offer information about the Milky
              Way Casino app.
            </li>
            <li>
              <strong>
                We only provide information about the Milky Way Casino app and a
                download link:
              </strong><br/>
              Our primary function is to inform users about the features of the
              Milky Way Casino app and provide a link for downloading it.
            </li>
            <li>
              <strong>
                We are not responsible for any kind of loss or damage:
              </strong><br/>
              While we strive to provide accurate and reliable information, we
              are not liable for any losses or damages incurred directly or
              indirectly from the use of our website or the Milky Way Casino
              app.
            </li>
            <li>
              <strong>
                We are not responsible for any adverse effects resulting from
                the use of casino apps:
              </strong><br/>
              Using casino apps, including the Milky Way Casino app, carries
              inherent risks. We disclaim responsibility for any negative
              consequences or outcomes arising from their use.
            </li>
          </ul>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};
export default disclaimer;
