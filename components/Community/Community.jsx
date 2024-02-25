import React from 'react'
import HeroCommunity from './HeroCommunity'
import CommunityContent from './CommunityContent'

export default function Community() {
	return (
        <div className="overflow-hidden">
            <HeroCommunity />
            <CommunityContent />
        </div>
	)
}