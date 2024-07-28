"use client"

type Props = {
    footer: boolean
}

const FooterSocial = ({footer}: Props) => {


    const socialsList = [
        {name: 'facebook', type: 'facebook', url: 'https://www.facebook.com/GloriousStudioFiveM'},
        {name: 'discord-rp', type: 'discord', url: 'https://discord.gg/gloriousrp', icon:``},
        {name: 'discord-training', type: 'discord', url: 'https://discord.gg/glorioustraining', icon:''},
    ]


    const renderIcon = (socialType: string) =>{
        if(socialType === 'facebook'){
            return (
                <span className={`h-2/6 mb-2 aspect-square ${footer ? '[&>svg]:fill-[#1877f2]' : '[&>svg]:fill-[#ffffff]'}`}><svg

                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 320 512">
                <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                </svg></span>)
                    } else if (socialType === 'discord') {
                        return (
                <span className={`h-3/6 mt-1 aspect-square ${footer ? '[&>svg]:fill-[#6366f1]' : '[&>svg]:fill-[#ffffff]'}`}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path
      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
  </svg>
</span>
            )
        }
    }

    const openSocial = (url: string) =>{
        window.open(url);
    }


    return (
        <div className="w-full h-10 tablet:h-10 s-desktop:h-12 m-desktop:h-12 l-desktop:h-12 flex justify-center items-center gap-4">

            {socialsList.map((social) => (
                <button onClick={() => openSocial(social.url)} key={social.name}
                        className={`h-full aspect-square shadow-sm border border-white/5 shadow-black rounded-lg ${footer ? 'bg-neutral-950 hover:scale-110' : 'bg-black bg-opacity-50 hover:bg-opacity-70 border border-white/20 hover:border-white/30 backdrop-blur-sm'}   flex justify-center items-center`}>
                    {renderIcon(social.type)}
                </button>
            ))}
        </div>
    );
};

export default FooterSocial;