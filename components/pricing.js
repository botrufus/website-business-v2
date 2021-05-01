export default function pricing() {
    return (
        <div className="pt-16">
            <div className="w-full bg-gray-200 py-12">
                <div className="container mx-auto">
                    <div className="w-4/5 mx-auto mb-12">
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 mb-4 font-mono">Einfache und transparente Preisgestaltung</h1>
                        <p className="text-xl text-center text-gray-600 font-mono">Konzentrieren Sie sich auf Ihre Geschäftsziele und wir kümmern uns um den Rest. Von vorgefertigten Komponenten über perfekte Vorlagen bis hin zu hochgradig anpassbarem Design. Sie müssen lediglich Ihren Plan entsprechend Ihrem nächsten Projekt auswählen.</p>

                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="xl:flex lg:flex items-end">
                            <div className="flex flex-wrap xl:w-1/4 bg-white items-center justify-center pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-2 sm:mb-2 mb-2 shadow">
                                <img src="https://cdn.tuk.dev/assets/calculator-img.png" alt />
                            </div>
                            <div className="xl:flex lg:flex md:flex sm:flex shadow">
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 px-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/paper-plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-mono text-gray-800 mb-3">Basic</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">Für Leute mit kleinem Dick (aka Rufus)</p>
                                    <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">Subscribe</button>
                                </div>
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 px-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-5">
                                        <img src="https://cdn.tuk.dev/assets/plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-mono text-gray-800 mb-3">Pro</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">More power for dich und dein Buizness</p>
                                    <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm border">Subscribe</button>
                                </div>
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 px-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/start-button.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-mono text-gray-800 mb-3">Pro+</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">Fur reiche Menschen aka Christoph und Jeff Bezos oder Elon Musk.</p>
                                    <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow">
                            <div>
                                <div className="flex items-center w-full">
                                    <p className="pl-4 pt-3 pb-3 font-mono text-sm text-gray-600 w-3/12">Kosten</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-mono lg:hidden">Professional</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-mono lg:hidden">Pro Plus</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-mono lg:hidden">Enterprise</p>
                                </div>
                                <table className="sm:table-fixed table-auto w-full bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Kosten</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$49 per Monat</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$49 per Monat</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$49 per Monat</td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Platform-Kosten</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$10 per Monat</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$10 per Monat</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">$10 per Monat</td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 pt-3 pb-4 break-words">Steuern</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">2% plus MwSt</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">2% plus MwSt</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">2% plus MwSt</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className="pl-4 pt-3 pb-3 font-mono text-sm text-gray-600">Features</p>
                                <table className="sm:table-fixed table-auto w-full bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Webseite</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Mitgestaltung</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Team Augmentation</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">hohe Geschwindigkeit</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">SEO - Services</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Priority Development</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">On-Call Support</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}