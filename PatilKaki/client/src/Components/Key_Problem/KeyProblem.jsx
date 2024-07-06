import './KeyProblem.css';

export default function KeyProblem() {
    return (
        <div className='KeyProblem'>
            <div className="key-cont">
                <div className="key-heading">
                    <h1>Four key questions answered by CleverBooks</h1>
                </div>
                <div className="key-ans">
                    <div className="ans">
                        <img src="/assets/ans-1.svg" alt="" />
                        <h2>What to order</h2>
                        <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>
                    <div className="ans">
                        <img src="/assets/ans-2.svg" alt="" />
                        <h2>When to order</h2>
                        <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
                    </div>
                    <div className="ans">
                        <img src="/assets/ans-3.svg" alt="" />
                        <h2>How much to stock</h2>
                        <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
                    </div>
                    <div className="ans">
                        <img src="/assets/ans-4.svg" alt="" />
                        <h2>Where to place</h2>
                        <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
