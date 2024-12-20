export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer p-5 border-t-2 leading-10 border-gray-300">
                    <div className="w-[14rem]">
                        <h2 className="font-bold text-[2rem]">Zubair Khan</h2>

                        <p className="leading-none">University Governor Sindh Kamran Khan Tessori, Saddar Karachi 75896</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-black"> Navbar</h4>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-black">Help</h4>
                        <ul>
                            <li>Payment Option</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-black">Newsletter</h4>
                      
                      Email : <input type="text" placeholder= "Enter Your Email Address" /> <br />
                        <button type="submit"  className="font-bold">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="para">
                    <hr />
                    <p>2023 Zubair. All rights reserved</p>
                </div>
            </footer>
        </>
    );
}
