interface RatingStarsProps {
  rating: number;
}

export const RatingStars = ({ rating }: RatingStarsProps): JSX.Element => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) return '★';
    if (index === fullStars && hasHalf) return '☆';
    return '☆';
  });

  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label={`Rated ${rating} out of 5`}>
      {stars.map((star, idx) => (
        <span key={idx} aria-hidden="true">
          {star}
        </span>
      ))}
      <span className="ml-1 text-xs text-slate-500">{rating.toFixed(1)}</span>
    </div>
  );
};
