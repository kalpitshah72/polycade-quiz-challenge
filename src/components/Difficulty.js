import React from "react";
import { StarOutlined, StarFilled } from '@ant-design/icons';

const DIFFICULTY = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
}

const STARS = ({ difficulty, ...props }) => {

    switch (difficulty) {

        case DIFFICULTY.EASY:
            return (
                <>
                    <StarFilled />
                    <StarOutlined />
                    <StarOutlined />
                </>
            );
        case DIFFICULTY.MEDIUM:
            return (
                <>
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                </>
            );

        case DIFFICULTY.HARD:
            return (
                <>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                </>
            );
        default:
            return (
                <>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                </>
            );
    }

}

export default STARS;