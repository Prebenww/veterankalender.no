import { FunctionComponent, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";


export const DonationAmount: FunctionComponent<{
    amount: Number;
    value: Number;
    setAmount: Function;
}> = ({ amount, setAmount, value }) => {
    console.log(process.env.API_BASE_ENDPOINT);

    return (
        <span
            className={`px-4 py-2 text-lg cursor-pointer bg-gray-light ${
                amount === value ? "border-2 border-amber-300" : ""
            } `}
            onClick={() => setAmount(value)}
        >
      {value} NOK
    </span>
    );
};











const family = () => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showModal, setShowModal] = useState(false)
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [hideModal, setHideModal] = useState(false)

    const handleModal = () => {
        if(!showModal) {
            setShowModal(true)
        }  else if (showModal) {
            setShowModal(false)
        }
    };




    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setAmount] = useState(10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scriptLoaded, setScriptLoaded] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect(() => {
         const addPaypalScript = () => {
             const script = document.createElement("script");
             script.type = "text/javascript";
             script.src = `https://www.paypal.com/sdk/js?client-id=AUYYe_jA-9FTUNZF-UFRISfMvUAnKTzxAb1pELVDW36PaFFvg_a3YXGJfgrc32USF79FL3C59jTluzvc`;
             script.async = true;

             script.onload = () => setScriptLoaded(true);

             document.body.appendChild(script);
         };
         addPaypalScript();
     }, []);

    const addDonationInDB = async (name: string) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/api/donations/`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        amount,
                    }),
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid h-full gap-2 p-6 lg:px-24 md:grid-cols-2">
            <div className="textBlock-wrapper">
                <h1 className="text-5xl">
                    VETERANKALENDER
                    <span className="font-bold text-amber-300"> 2022 </span>
                </h1>
                <p className="textBlock-subtitle">
                    Veterankalenderen utgis hvert år som en honnør til alle de ca. 100 000 veteraner som har deltatt i internasjonale operasjoner  rundt om i verden, og er et symbol på vår støtte til norske veteraner og til de aktivt tjenestegjørende for den innsats de yter.

                </p>

            </div>
            <div className="grid place-items-center">
                <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12 bg-neutral-900 ">
                    <h1 className="text-5xl textBlock-title text-white z-50">Kjøp her</h1>
                    <p className="textBlock-subtitle text-white">Betal med Paypal eller scan QR-koden for å betale med vipps fra telefonen.

                    </p>
                    <div className="flex space-x-10 text-white">
                        <DonationAmount value={299} setAmount={setAmount} amount={amount} />
                    </div>
                    {showModal ? (
                        <Image
                            src="/../public/assets/qr-kode-bella.png"
                            height={200} width={200}
                        >
                        </Image>
                    ) : "" }
                    <button onClick={handleModal} ><Image src="/../public/assets/vipps.png" alt="vipps checkout" height={45} width={175} /></button>
                       {scriptLoaded ? (
                        <PayPalButton
                            amount={amount}
                            onSuccess={(details: { payer: { name: { given_name: string; }; }; }, data: any) => {
                                //save the transaction
                                // console.log(details);
                                addDonationInDB(details.payer.name.given_name);
                            }}
                        />
                    ) : (
                        <span>Loading...</span>
                    )}{" "}
                </div>
            </div>
        </div>
    );
};

export default family;