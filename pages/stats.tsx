//TODO this page getServerSideProps

import { NextPage } from "next";

const stats: NextPage = () => {

    return (
        <div className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-3 text-white ">
                <div className="items-center w-10/12 mx-auto textBlock-wrapper md:py-14 bg-gray-dark">
                    <h1 className="text-2xl font-medium md:text-5xl text-yellow">
                        Ta kontakt på epost
                    </h1>
                    <span className="text-md font-medium md:text-2xl text-white ">
                        post@veterankalender.no
          </span>
                </div>
            </div>

        </div>
    );
};



export default stats;