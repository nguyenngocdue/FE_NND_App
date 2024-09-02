function TopAboutUs()  {
    return <>
        <section
        id="about"
        className="relative bg-cover bg-center h-screen"
        style={{
            backgroundImage: 'url("https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/6205de33ec584ca2ce3d153f_Rectangle-2.jpg")',
        }}
        >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">ABOUT US</h1>
        </div>
        </section>
    </>
}
export default TopAboutUs;