import Link from 'next/link';

const Breadcrumb = ({ items }) => {
    return (
        <div className='list_breadcrumb'>
            {items.map((item, index) => (
                <div key={index} className='breadcrumb'>
                    {item.href ? (
                        <>
                            <Link href={item.href}>
                                <span>{item.text}</span>
                            </Link>
                            {index < items.length - 1 && <img src='/images/tour/icon_arr_left.svg' />}
                        </>
                    ) : (
                        <>
                            <span>{item.text}</span>
                            {index < items.length - 1 && <img src='/images/tour/icon_arr_left.svg' />}
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Breadcrumb;