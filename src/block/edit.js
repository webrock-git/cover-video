import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';
import poster from "./img/poster.jpg";
import { RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('cover-video'),
	});

	const cover = attributes?.coverImage?.url ? attributes?.coverImage?.url : poster;

	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockProps}>
				<div className="cover-video-content" style={{ backgroundImage: `url(${cover})` }}>
					<div className="cover-video-content-wrapper">
						<button className="cover-video-popup-btn">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 72 72">
								<circle cx="36" cy="36" r="35" fill="#000" fillOpacity=".7" stroke="#fff" strokeWidth="2" />
								<path fill="#fff" d="M49 34.268c1.333.77 1.333 2.694 0 3.464L31 48.124c-1.333.77-3-.192-3-1.732V25.608c0-1.54 1.667-2.502 3-1.732l18 10.392Z" />
							</svg>
						</button>
						<div className="cover-video-text-box">
							<RichText 
								tagName='h3'
								className='cover-video-title'
								value={attributes?.title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder='Write Title'
							/>
							<RichText 
								tagName='p'
								className='cover-video-description'
								value={attributes?.subtitle}
								onChange={(value) => setAttributes({ subtitle: value })}
								placeholder='Write Sub Title'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
