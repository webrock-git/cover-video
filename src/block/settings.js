import {
    PanelBody,
    __experimentalSpacer as Spacer,
    TextControl,
    Button
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import { upload } from '@wordpress/icons';

const Settings = ({ attributes, setAttributes, clientId }) => {
    return (
        <InspectorControls>
            <PanelBody title={'Button Settings'} initialOpen={true}>
                <Spacer marginBottom={'20px'} marginTop={'10px'}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) =>
                                setAttributes({ coverImage: media })
                            }
                            allowedTypes={['image/jpg', 'image/jpeg', 'image/png']}
                            value={attributes?.coverImage?.id}
                            multiple={false}
                            title='Upload Thumbnail'
                            render={({ open }) => {
                                return (
                                    <Button
                                        className="toehold-card-thumbnail-button"
                                        onClick={open}
                                        icon={attributes?.coverImage?.url ? <img style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '50%' }} src={attributes?.coverImage?.url} /> : upload}
                                        iconSize={30}
                                        iconPosition='left'
                                        style={{ width: '100%', justifyContent: 'flex-start', border: '1px solid #00000026', alignItems: 'center', gap: '8px' }}
                                    >
                                        {attributes?.coverImage?.filename || __('Upload')}
                                    </Button>
                                );
                            }}
                        />
                    </MediaUploadCheck>
                </Spacer>
                <TextControl
                    label={__('Video URL')}
                    value={attributes.url}
                    onChange={(value) => setAttributes({ url: value })}
                />
                <TextControl
                    label={__('Title')}
                    value={attributes.title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextControl
                    label={__('Sub Title')}
                    value={attributes.subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);